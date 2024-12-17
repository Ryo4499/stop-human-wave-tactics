# schemas/graphql.py
from typing import List, Optional
import strawberry
from sqlalchemy import select, func
from sqlalchemy.orm import selectinload

from ..infrastructure.database import Database
from .models import ArticleDB
from .models import CategoryDB
from .models import TagDB
from .models import SEOMetadataDB
from .graphql import (
    Article,
    Category,
    Tag,
    ArticleInput,
    ArticleUpdateInput,
    PaginationInput,
    ArticleFilterInput,
    ArticleSortInput,
    PageInfo,
    PaginatedArticles,
)


@strawberry.type
class Query:
    @strawberry.field
    async def article(
        self, info: strawberry.Info, locale: str, slug: str
    ) -> Optional[Article]:
        db: Database = info.context["db"]
        async with db.session() as session:
            query = (
                select(ArticleDB)
                .options(
                    selectinload(ArticleDB.seo_metadata),
                    selectinload(ArticleDB.category),
                    selectinload(ArticleDB.tags),
                )
                .where(ArticleDB.locale == locale, ArticleDB.slug == slug)
            )
            result = await session.execute(query)
            db_article = result.scalar_one_or_none()

            if not db_article:
                return None

            return Article.from_db(db_article)

    @strawberry.field
    async def articles(
        self,
        info: strawberry.Info,
        pagination: Optional[PaginationInput] = None,
        filter: Optional[ArticleFilterInput] = None,
        sort: Optional[ArticleSortInput] = None,
    ) -> PaginatedArticles:
        db: Database = info.context["db"]
        pagination = pagination or PaginationInput()
        filter = filter or ArticleFilterInput()
        sort = sort or ArticleSortInput()

        async with db.session() as session:
            # Base query
            query = select(ArticleDB).options(
                selectinload(ArticleDB.seo_metadata),
                selectinload(ArticleDB.category),
                selectinload(ArticleDB.tags),
            )

            # Apply filters
            if filter.locale:
                query = query.where(ArticleDB.locale == filter.locale)

            if filter.category_slugs:
                query = query.join(ArticleDB.category).where(
                    CategoryDB.slug.in_(filter.category_slugs)
                )

            if filter.tag_slugs:
                query = query.join(ArticleDB.tags).where(
                    TagDB.slug.in_(filter.tag_slugs)
                )

            if filter.search_query:
                search_pattern = f"%{filter.search_query}%"
                query = query.join(ArticleDB.seo_metadata).where(
                    ArticleDB.content.ilike(search_pattern)
                    | SEOMetadataDB.meta_title.ilike(search_pattern)
                    | SEOMetadataDB.meta_description.ilike(search_pattern)
                )

            if filter.published_after:
                query = query.where(ArticleDB.published_at >= filter.published_after)

            if filter.published_before:
                query = query.where(ArticleDB.published_at <= filter.published_before)

            # Get total count
            count_query = select(func.count()).select_from(query.subquery())
            total = await session.scalar(count_query)

            # Apply sorting
            sort_field = getattr(ArticleDB, sort.field)
            if sort.order == "DESC":
                sort_field = sort_field.desc()
            query = query.order_by(sort_field)

            # Apply pagination
            query = query.offset((pagination.page - 1) * pagination.size).limit(
                pagination.size
            )

            # Execute query
            result = await session.execute(query)
            db_articles = result.scalars().all()

            # Convert to GraphQL types
            articles = [Article.from_db(article) for article in db_articles]

            return PaginatedArticles(
                items=articles,
                page_info=PageInfo(
                    has_next_page=total > pagination.page * pagination.size,
                    has_previous_page=pagination.page > 1,
                    total_pages=(total + pagination.size - 1) // pagination.size,
                    total_items=total,
                    current_page=pagination.page,
                ),
            )

    @strawberry.field
    async def categories(self, info: strawberry.Info) -> List[Category]:
        db: Database = info.context["db"]
        async with db.session() as session:
            query = select(CategoryDB).order_by(CategoryDB.name)
            result = await session.execute(query)
            db_categories = result.scalars().all()
            return [Category.from_db(category) for category in db_categories]

    @strawberry.field
    async def tags(self, info: strawberry.Info) -> List[Tag]:
        db: Database = info.context["db"]
        async with db.session() as session:
            query = select(TagDB).order_by(TagDB.name)
            result = await session.execute(query)
            db_tags = result.scalars().all()
            return [Tag.from_db(tag) for tag in db_tags]


@strawberry.type
class Mutation:
    @strawberry.mutation
    async def create_article(
        self, info: strawberry.Info, input: ArticleInput
    ) -> Article:
        db: Database = info.context["db"]
        async with db.session() as session:
            # Create SEO metadata
            seo_metadata = SEOMetadataDB(
                meta_title=input.seo.meta_title,
                meta_description=input.seo.meta_description,
                keywords=input.seo.keywords,
                canonical_url=input.seo.canonical_url,
                og_title=input.seo.og_title,
                og_description=input.seo.og_description,
                thumbnail_url=input.seo.thumbnail_url,
            )
            session.add(seo_metadata)
            await session.flush()

            # Get category
            query = select(CategoryDB).where(CategoryDB.id == int(input.category_id))
            result = await session.execute(query)
            category = result.scalar_one_or_none()

            if not category:
                raise ValueError(f"Category with ID {input.category_id} not found")

            # Get tags
            tags = []
            if input.tag_ids:
                query = select(TagDB).where(TagDB.id.in_(input.tag_ids))
                result = await session.execute(query)
                tags = result.scalars().all()

            # Create article
            article = ArticleDB(
                slug=input.slug,
                locale=input.locale,
                content=input.content,
                published_at=input.published_at,
                seo_metadata=seo_metadata,
                category=category,
                tags=tags,
            )
            session.add(article)
            await session.flush()

            return Article.from_db(article)

    @strawberry.mutation
    async def update_article(
        self, info: strawberry.Info, id: strawberry.ID, input: ArticleUpdateInput
    ) -> Article:
        db: Database = info.context["db"]
        async with db.session() as session:
            # Get existing article
            query = (
                select(ArticleDB)
                .options(
                    selectinload(ArticleDB.seo_metadata),
                    selectinload(ArticleDB.category),
                    selectinload(ArticleDB.tags),
                )
                .where(ArticleDB.id == int(id))
            )
            result = await session.execute(query)
            article = result.scalar_one_or_none()

            if not article:
                raise ValueError(f"Article with ID {id} not found")

            # Update article fields
            if input.slug is not None:
                article.slug = input.slug
            if input.locale is not None:
                article.locale = input.locale
            if input.content is not None:
                article.content = input.content
            if input.published_at is not None:
                article.published_at = input.published_at

            # Update category
            if input.category_id is not None:
                query = select(CategoryDB).where(
                    CategoryDB.id == int(input.category_id)
                )
                result = await session.execute(query)
                category = result.scalar_one_or_none()
                if not category:
                    raise ValueError(f"Category with ID {input.category_id} not found")
                article.category = category

            # Update SEO metadata
            if input.seo:
                if input.seo.meta_title is not None:
                    article.seo_metadata.meta_title = input.seo.meta_title
                if input.seo.meta_description is not None:
                    article.seo_metadata.meta_description = input.seo.meta_description
                if input.seo.keywords is not None:
                    article.seo_metadata.keywords = input.seo.keywords
                if input.seo.canonical_url is not None:
                    article.seo_metadata.canonical_url = input.seo.canonical_url
                if input.seo.og_title is not None:
                    article.seo_metadata.og_title = input.seo.og_title
                if input.seo.og_description is not None:
                    article.seo_metadata.og_description = input.seo.og_description
                if input.seo.thumbnail_url is not None:
                    article.seo_metadata.thumbnail_url = input.seo.thumbnail_url

            # Update tags
            if input.tag_ids is not None:
                query = select(TagDB).where(TagDB.id.in_(input.tag_ids))
                result = await session.execute(query)
                article.tags = result.scalars().all()

            await session.flush()
            return Article.from_db(article)
