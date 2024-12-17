from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    DateTime,
    ForeignKey,
    Table,
    UniqueConstraint,
    func,
    Index,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime
from typing import List, Optional
from ..infrastructure.database import Base

article_tags = Table(
    "article_tags",
    Base.metadata,
    Column(
        "article_id",
        Integer,
        ForeignKey("articles.id", ondelete="CASCADE"),
        primary_key=True,
    ),
    Column(
        "tag_id", Integer, ForeignKey("tags.id", ondelete="CASCADE"), primary_key=True
    ),
    Index("idx_article_tags_article_id", "article_id"),
    Index("idx_article_tags_tag_id", "tag_id"),
)


class SEOMetadataDB(Base):
    __tablename__ = "seo_metadata"
    __table_args__ = (Index("idx_seo_metadata_meta_title", "meta_title"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    meta_title: Mapped[str] = mapped_column(String(200), nullable=False)
    meta_description: Mapped[Optional[str]] = mapped_column(String(500))
    keywords: Mapped[Optional[str]] = mapped_column(String(200))
    canonical_url: Mapped[Optional[str]] = mapped_column(String(500))
    og_title: Mapped[Optional[str]] = mapped_column(String(200))
    og_description: Mapped[Optional[str]] = mapped_column(String(500))
    og_image: Mapped[Optional[str]] = mapped_column(String(500))
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    # Relationship
    article: Mapped["ArticleDB"] = relationship(
        back_populates="seo_metadata", uselist=False, cascade="all, delete-orphan"
    )


class CategoryDB(Base):
    __tablename__ = "categories"
    __table_args__ = (
        Index("idx_categories_slug", "slug", unique=True),
        Index("idx_categories_name", "name"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    slug: Mapped[str] = mapped_column(String(100), nullable=False, unique=True)
    description: Mapped[Optional[str]] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    # Relationships
    articles: Mapped[List["ArticleDB"]] = relationship(back_populates="category")


class TagDB(Base):
    __tablename__ = "tags"
    __table_args__ = (
        Index("idx_tags_slug", "slug", unique=True),
        Index("idx_tags_name", "name"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    slug: Mapped[str] = mapped_column(String(100), nullable=False, unique=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    # Relationships
    articles: Mapped[List["ArticleDB"]] = relationship(
        secondary=article_tags, back_populates="tags"
    )


class ArticleDB(Base):
    __tablename__ = "articles"
    __table_args__ = (
        UniqueConstraint("locale", "slug", name="uq_articles_locale_slug"),
        Index("idx_articles_published_at", "published_at"),
        Index("idx_articles_locale_slug", "locale", "slug"),
        Index("idx_articles_locale", "locale"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    slug: Mapped[str] = mapped_column(String(200), nullable=False)
    locale: Mapped[str] = mapped_column(String(10), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    published_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True))
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    # Foreign Keys
    seo_metadata_id: Mapped[int] = mapped_column(
        ForeignKey("seo_metadata.id", ondelete="CASCADE"), nullable=False
    )
    category_id: Mapped[int] = mapped_column(
        ForeignKey("categories.id", ondelete="CASCADE"), nullable=False
    )

    # Relationships
    seo_metadata: Mapped[SEOMetadataDB] = relationship(
        back_populates="article",
        lazy="joined",
        cascade="all, delete-orphan",
        single_parent=True,
    )

    category: Mapped[CategoryDB] = relationship(
        back_populates="articles", lazy="joined"
    )

    tags: Mapped[List[TagDB]] = relationship(
        secondary=article_tags, back_populates="articles", lazy="joined"
    )

    def __repr__(self) -> str:
        return f"Article(id={self.id}, slug='{self.slug}', locale='{self.locale}')"
