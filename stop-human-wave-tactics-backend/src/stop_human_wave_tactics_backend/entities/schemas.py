# schemas/graphql.py
import hmac
import os

import strawberry
from sqlalchemy import func, select
from sqlalchemy.orm import selectinload
from strawberry.permission import BasePermission

from ..infrastructure.database import Database
from .graphql import (
    Article,
    ArticleFilterInput,
    ArticleInput,
    ArticleSortInput,
    ArticleUpdateInput,
    Category,
    PageInfo,
    PaginatedArticles,
    PaginationInput,
    Tag,
)
from .models import ArticleDB, CategoryDB, SEOMetadataDB, TagDB, article_tags


class AdminPermission(BasePermission):
    message = "A valid administrator bearer token is required"

    def has_permission(self, source, info, **kwargs):
        expected = os.environ.get("ADMIN_TOKEN", "")
        supplied = info.context["request"].headers.get("authorization", "")
        return bool(expected) and hmac.compare_digest(supplied, f"Bearer {expected}")


@strawberry.type
class Query:
    @strawberry.field
    async def article(
        self, info: strawberry.Info, locale: str, slug: str
    ) -> Article | None:
        db: Database = info.context["db"]
        async with db.session() as session:
            query = (
                select(ArticleDB)
                .options(
                    selectinload(ArticleDB.seo_metadata),
                    selectinload(ArticleDB.category),
                    selectinload(ArticleDB.tags),
                )
                .where(
                    ArticleDB.locale == locale,
                    ArticleDB.slug == slug,
                    ArticleDB.published_at.is_not(None),
                )
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
        pagination: PaginationInput | None = None,
        filter: ArticleFilterInput | None = None,
        sort: ArticleSortInput | None = None,
    ) -> PaginatedArticles:
        db: Database = info.context["db"]
        pagination = pagination or PaginationInput()
        filter = filter or ArticleFilterInput()
        sort = sort or ArticleSortInput()

        async with db.session() as session:
            if not 1 <= pagination.page or not 1 <= pagination.size <= 100:
                raise ValueError(
                    "Page must be positive and size must be between 1 and 100"
                )
            if sort.field not in {"published_at", "updated_at", "created_at", "id"}:
                raise ValueError("Unsupported article sort field")

            # Base query
            query = select(ArticleDB).options(
                selectinload(ArticleDB.seo_metadata),
                selectinload(ArticleDB.category),
                selectinload(ArticleDB.tags),
            )

            query = query.where(ArticleDB.published_at.is_not(None))
            if filter.id is not None:
                query = query.where(ArticleDB.id == int(filter.id))
            if filter.category_id is not None:
                query = query.where(ArticleDB.category_id == int(filter.category_id))
            if filter.tag_id is not None:
                query = query.where(ArticleDB.tags.any(TagDB.id == int(filter.tag_id)))

            # Apply filters
            if filter.locale:
                query = query.where(ArticleDB.locale == filter.locale)

            if filter.category_slugs:
                query = query.join(ArticleDB.category).where(
                    CategoryDB.slug.in_(filter.category_slugs)
                )

            if filter.tag_slugs:
                query = query.where(
                    ArticleDB.tags.any(TagDB.slug.in_(filter.tag_slugs))
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
            if sort.order.value == "desc":
                sort_field = sort_field.desc()
            query = query.order_by(sort_field, ArticleDB.id)

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
    async def categories(
        self, info: strawberry.Info, locale: str | None = None
    ) -> list[Category]:
        db: Database = info.context["db"]
        async with db.session() as session:
            count = select(func.count(ArticleDB.id)).where(
                ArticleDB.category_id == CategoryDB.id,
                ArticleDB.published_at.is_not(None),
            )
            if locale:
                count = count.where(ArticleDB.locale == locale)
            query = select(CategoryDB, count.scalar_subquery()).order_by(
                CategoryDB.name
            )
            result = await session.execute(query)
            return [
                Category.from_db(category, total) for category, total in result.all()
            ]

    @strawberry.field
    async def tags(self, info: strawberry.Info, locale: str | None = None) -> list[Tag]:
        db: Database = info.context["db"]
        async with db.session() as session:
            count = (
                select(func.count(ArticleDB.id))
                .join(article_tags)
                .where(
                    article_tags.c.tag_id == TagDB.id,
                    ArticleDB.published_at.is_not(None),
                )
            )
            if locale:
                count = count.where(ArticleDB.locale == locale)
            query = select(TagDB, count.scalar_subquery()).order_by(TagDB.name)
            result = await session.execute(query)
            return [Tag.from_db(tag, total) for tag, total in result.all()]


@strawberry.type
class Mutation:
    @strawberry.mutation(permission_classes=[AdminPermission])
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
                og_image=input.seo.thumbnail_url,
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
                query = select(TagDB).where(
                    TagDB.id.in_([int(id) for id in input.tag_ids])
                )
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

            await session.refresh(article)
            return Article.from_db(article)

    @strawberry.mutation(permission_classes=[AdminPermission])
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
            if input.published_at is not strawberry.UNSET:
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
                    article.seo_metadata.og_image = input.seo.thumbnail_url

            # Update tags
            if input.tag_ids is not None:
                query = select(TagDB).where(
                    TagDB.id.in_([int(id) for id in input.tag_ids])
                )
                result = await session.execute(query)
                article.tags = result.scalars().all()

            await session.flush()
            await session.refresh(article)
            return Article.from_db(article)

    @strawberry.mutation(permission_classes=[AdminPermission])
    async def create_category(
        self, info: strawberry.Info, name: str, slug: str
    ) -> Category:
        async with info.context["db"].session() as session:
            category = CategoryDB(name=name, slug=slug)
            session.add(category)
            await session.flush()
            return Category.from_db(category)

    @strawberry.mutation(permission_classes=[AdminPermission])
    async def create_tag(self, info: strawberry.Info, name: str, slug: str) -> Tag:
        async with info.context["db"].session() as session:
            tag = TagDB(name=name, slug=slug)
            session.add(tag)
            await session.flush()
            return Tag.from_db(tag)

    @strawberry.mutation(permission_classes=[AdminPermission])
    async def delete_article(self, info: strawberry.Info, id: strawberry.ID) -> bool:
        async with info.context["db"].session() as session:
            article = await session.get(ArticleDB, int(id))
            if article is None:
                return False
            await session.delete(article)
            return True
