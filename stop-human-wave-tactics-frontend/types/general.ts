import {
  ArticleEntityResponseCollection,
  CategoryEntityResponseCollection,
  GetArticlesQueryVariables,
  TagEntityResponseCollection,
} from "./graphql_res";

export interface CategoriesAndTagsProps {
  categories: CategoryEntityResponseCollection;
  tags: TagEntityResponseCollection
}

export interface CategoriesAndTagsResponseProps {
  categories: CategoryEntityResponseCollection;
  tags: TagEntityResponseCollection;
  variables: object;
}

export interface ArticlesResponseProps {
  articles: ArticleEntityResponseCollection;
  variables: object;
}

export interface ArticlesCategorisTagsProps {
  articles: ArticleEntityResponseCollection;
  categories: CategoryEntityResponseCollection;
  tags: TagEntityResponseCollection
  variables: GetArticlesQueryVariables;
}

export interface UUIDParams {
  params: { uuid: string | undefined };
  locale: string;
}

export type UUIDStaticProps = {
  params: { uuid: string };
  locale: string;
};

export interface PageParams {
  params: { page: string };
  locale: string;
}

export interface PagesStaticProps {
  params: { page: string };
  locale: string;
}

export type IStaticProps = {
  locales: Array<string>;
  locale: string;
  defaultLocale: string;
};
