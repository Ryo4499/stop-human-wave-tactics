from datetime import datetime
from enum import StrEnum

import strawberry


@strawberry.type
class SEOMetadata:
    id: strawberry.ID
    meta_title: str
    meta_description: str | None = None
    keywords: str | None = None
    canonical_url: str | None = None
    og_title: str | None = None
    og_description: str | None = None
    thumbnail_url: str | None = None

    @classmethod
    def from_db(cls, data):
        return cls(
            id=str(data.id),
            meta_title=data.meta_title,
            meta_description=data.meta_description,
            keywords=data.keywords,
            canonical_url=data.canonical_url,
            og_title=data.og_title,
            og_description=data.og_description,
            thumbnail_url=data.og_image,
        )


@strawberry.type
class Category:
    article_count: int
    id: strawberry.ID
    name: str
    slug: str
    created_at: datetime
    updated_at: datetime

    @classmethod
    def from_db(cls, data, article_count=0):
        return cls(
            article_count=article_count,
            id=str(data.id),
            name=data.name,
            slug=data.slug,
            created_at=data.created_at,
            updated_at=data.updated_at,
        )


@strawberry.type
class Tag:
    article_count: int
    id: strawberry.ID
    name: str
    slug: str
    created_at: datetime
    updated_at: datetime

    @classmethod
    def from_db(cls, data, article_count=0):
        return cls(
            article_count=article_count,
            id=str(data.id),
            name=data.name,
            slug=data.slug,
            created_at=data.created_at,
            updated_at=data.updated_at,
        )


@strawberry.type
class Article:
    id: strawberry.ID
    slug: str
    locale: str
    content: str
    published_at: datetime | None
    created_at: datetime
    updated_at: datetime
    seo_metadata: SEOMetadata
    category: Category
    tags: list[Tag]

    @classmethod
    def from_db(cls, data):
        return cls(
            id=str(data.id),
            slug=data.slug,
            locale=data.locale,
            content=data.content,
            published_at=data.published_at,
            created_at=data.created_at,
            updated_at=data.updated_at,
            seo_metadata=SEOMetadata.from_db(data.seo_metadata),
            category=Category.from_db(data.category),
            tags=[Tag.from_db(tag) for tag in data.tags],
        )


@strawberry.type
class PageInfo:
    has_next_page: bool
    has_previous_page: bool
    total_pages: int
    total_items: int
    current_page: int


@strawberry.type
class PaginatedArticles:
    items: list[Article]
    page_info: PageInfo


@strawberry.input
class SEOMetadataInput:
    meta_title: str
    meta_description: str | None = None
    keywords: str | None = None
    canonical_url: str | None = None
    og_title: str | None = None
    og_description: str | None = None
    thumbnail_url: str | None = None


@strawberry.input
class ArticleInput:
    slug: str
    locale: str
    content: str
    published_at: datetime | None = None
    category_id: strawberry.ID  # 単一のカテゴリーID
    tag_ids: list[strawberry.ID] | None = None
    seo: SEOMetadataInput


@strawberry.input
class ArticleUpdateInput:
    slug: str | None = None
    locale: str | None = None
    content: str | None = None
    published_at: datetime | None = strawberry.UNSET
    category_id: strawberry.ID | None = None  # 単一のカテゴリーID
    tag_ids: list[strawberry.ID] | None = None
    seo: SEOMetadataInput | None = None


@strawberry.input
class PaginationInput:
    page: int = 1
    size: int = 10


@strawberry.input
class ArticleFilterInput:
    id: strawberry.ID | None = None
    category_id: strawberry.ID | None = None
    tag_id: strawberry.ID | None = None
    locale: str | None = None
    category_slugs: list[str] | None = None
    tag_slugs: list[str] | None = None
    search_query: str | None = None
    published_after: datetime | None = None
    published_before: datetime | None = None


@strawberry.enum
class SortOrder(StrEnum):
    ASC: str = "asc"
    DESC: str = "desc"


@strawberry.input
class ArticleSortInput:
    field: str = "published_at"
    order: SortOrder = SortOrder.DESC
