from enum import StrEnum
from datetime import datetime
from typing import List, Optional
import strawberry


@strawberry.type
class SEOMetadata:
    id: strawberry.ID
    meta_title: str
    meta_description: Optional[str] = None
    keywords: Optional[str] = None
    canonical_url: Optional[str] = None
    og_title: Optional[str] = None
    og_description: Optional[str] = None
    thumbnail_url: Optional[str] = None

    @classmethod
    def from_db(cls, data: dict) -> "SEOMetadata":
        return cls(
            id=str(data["id"]),
            meta_title=data["meta_title"],
            meta_description=data.get("meta_description"),
            keywords=data.get("keywords"),
            canonical_url=data.get("canonical_url"),
            og_title=data.get("og_title"),
            og_description=data.get("og_description"),
            thumbnail_url=data.get("thumbnail_url"),
        )


@strawberry.type
class Category:
    id: strawberry.ID
    name: str
    slug: str
    created_at: datetime
    updated_at: datetime

    @classmethod
    def from_db(cls, data: dict) -> "Category":
        return cls(
            id=str(data["id"]),
            name=data["name"],
            slug=data["slug"],
            created_at=data["created_at"],
            updated_at=data["updated_at"],
        )


@strawberry.type
class Tag:
    id: strawberry.ID
    name: str
    slug: str
    created_at: datetime
    updated_at: datetime

    @classmethod
    def from_db(cls, data: dict) -> "Tag":
        return cls(
            id=str(data["id"]),
            name=data["name"],
            slug=data["slug"],
            created_at=data["created_at"],
            updated_at=data["updated_at"],
        )


@strawberry.type
class Article:
    id: strawberry.ID
    slug: str
    locale: str
    content: str
    published_at: Optional[datetime]
    created_at: datetime
    updated_at: datetime
    seo_metadata: SEOMetadata
    category: Category
    tags: List[Tag]

    @classmethod
    def from_db(cls, data: dict) -> "Article":
        return cls(
            id=str(data["id"]),
            slug=data["slug"],
            locale=data["locale"],
            content=data["content"],
            published_at=data["published_at"],
            created_at=data["created_at"],
            updated_at=data["updated_at"],
            seo_metadata=SEOMetadata.from_db(data["seo_metadata"]),
            category=data["category"],
            tags=[Tag.from_db(tag) for tag in (data.get("tags") or [])],
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
    items: List[Article]
    page_info: PageInfo


@strawberry.input
class SEOMetadataInput:
    meta_title: str
    meta_description: Optional[str] = None
    keywords: Optional[str] = None
    canonical_url: Optional[str] = None
    og_title: Optional[str] = None
    og_description: Optional[str] = None
    thumbnail_url: Optional[str] = None


@strawberry.input
class ArticleInput:
    slug: str
    locale: str
    content: str
    published_at: Optional[datetime] = None
    category_id: strawberry.ID  # 単一のカテゴリーID
    tag_ids: Optional[List[strawberry.ID]] = None
    seo: SEOMetadataInput


@strawberry.input
class ArticleUpdateInput:
    slug: Optional[str] = None
    locale: Optional[str] = None
    content: Optional[str] = None
    published_at: Optional[datetime] = None
    category_id: Optional[strawberry.ID] = None  # 単一のカテゴリーID
    tag_ids: Optional[List[strawberry.ID]] = None
    seo: Optional[SEOMetadataInput] = None


@strawberry.input
class PaginationInput:
    page: int = 1
    size: int = 10


@strawberry.input
class ArticleFilterInput:
    locale: Optional[str] = None
    category_slugs: Optional[List[str]] = None
    tag_slugs: Optional[List[str]] = None
    search_query: Optional[str] = None
    published_after: Optional[datetime] = None
    published_before: Optional[datetime] = None


@strawberry.enum
class SortOrder(StrEnum):
    ASC: str = "asc"
    DESC: str = "desc"


@strawberry.input
class ArticleSortInput:
    field: str = "published_at"
    order: SortOrder = SortOrder.DESC
