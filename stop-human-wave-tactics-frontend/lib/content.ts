import { request, gql } from "graphql-request";
import type { GetServerSidePropsContext } from "next";
import type {
  ArticleEntityResponseCollection,
  CategoryEntityResponseCollection,
  TagEntityResponseCollection,
} from "../types/graphql_res";

type Taxonomy = {
  id: string;
  name: string;
  slug: string;
  articleCount?: number;
};
type Article = {
  id: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  category: Taxonomy;
  tags: Taxonomy[];
  seoMetadata: {
    metaTitle: string;
    metaDescription: string | null;
    keywords: string | null;
    thumbnailUrl: string | null;
  };
};
type Content = {
  articles: {
    items: Article[];
    pageInfo: { currentPage: number; totalPages: number; totalItems: number };
  };
  categories: Taxonomy[];
  tags: Taxonomy[];
};
const query = gql`
  query Content(
    $pagination: PaginationInput!
    $filter: ArticleFilterInput!
    $locale: String!
  ) {
    articles(pagination: $pagination, filter: $filter) {
      items {
        id
        slug
        content
        createdAt
        updatedAt
        publishedAt
        seoMetadata {
          metaTitle
          metaDescription
          keywords
          thumbnailUrl
        }
        category {
          id
          name
          slug
        }
        tags {
          id
          name
          slug
        }
      }
      pageInfo {
        currentPage
        totalPages
        totalItems
      }
    }
    categories(locale: $locale) {
      id
      name
      slug
      articleCount
    }
    tags(locale: $locale) {
      id
      name
      slug
      articleCount
    }
  }
`;
const taxonomy = (item: Taxonomy) => ({
  id: item.id,
  attributes: {
    name: item.name,
    ...(item.articleCount === undefined
      ? {}
      : { articleCount: item.articleCount }),
  },
});

export type ContentProps = {
  articles: ArticleEntityResponseCollection;
  categories: CategoryEntityResponseCollection;
  tags: TagEntityResponseCollection;
  detail: boolean;
  search: string;
};

export async function contentProps(
  context: GetServerSidePropsContext,
  kind = "index",
) {
  const page = Number(context.params?.page || 1);
  if (!Number.isInteger(page) || page < 1) return { notFound: true as const };
  const id = context.params?.id;
  const search =
    typeof context.query.title === "string" ? context.query.title : "";
  const filter = {
    locale: context.locale || "ja",
    ...(kind === "article" ? { id } : {}),
    ...(kind === "category" ? { categoryId: id } : {}),
    ...(kind === "tag" ? { tagId: id } : {}),
    ...(kind === "search" ? { searchQuery: search } : {}),
  };
  const size = 6;
  const data = await request<Content>(
    `${process.env.BACKEND_URL || "http://localhost:18000"}/graphql`,
    query,
    { pagination: { page, size }, filter, locale: context.locale || "ja" },
  );
  if (kind === "article" && !data.articles.items.length)
    return { notFound: true as const };
  const articles = {
    data: data.articles.items.map((item) => ({
      id: item.id,
      attributes: {
        title: item.seoMetadata.metaTitle,
        summary: item.seoMetadata.metaDescription || "",
        content: item.content,
        createdAt: item.createdAt.replace("T", " ").slice(0, 19),
        updatedAt: item.updatedAt.replace("T", " ").slice(0, 19),
        publishedAt: item.publishedAt,
        thumbnail: null,
        seo: {
          metaTitle: item.seoMetadata.metaTitle,
          metaDescription: item.seoMetadata.metaDescription,
          keywords: item.seoMetadata.keywords,
        },
        category: { data: taxonomy(item.category) },
        tags: { data: item.tags.map(taxonomy) },
      },
    })),
    meta: {
      pagination: {
        page,
        pageSize: size,
        pageCount: data.articles.pageInfo.totalPages,
        total: data.articles.pageInfo.totalItems,
      },
    },
  };
  return {
    props: {
      articles: articles as ArticleEntityResponseCollection,
      categories: {
        data: data.categories.map(taxonomy),
      } as CategoryEntityResponseCollection,
      tags: { data: data.tags.map(taxonomy) } as TagEntityResponseCollection,
      detail: kind === "article",
      search,
    },
  };
}
