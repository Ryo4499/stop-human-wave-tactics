import {
  ArticleEntityResponseCollection,
  CategoryEntityResponseCollection,
  GetArticlesQueryVariables,
} from "./graphql_res";

export interface CategoriesProps {
  categories: CategoryEntityResponseCollection;
}

export interface CategoriesResponseProps {
  categories: CategoryEntityResponseCollection;
  variables: object;
}

export interface ArticlesResponseProps {
  articles: ArticleEntityResponseCollection;
  variables: object;
}

export interface ArticlesCategorisProps {
  articles: ArticleEntityResponseCollection;
  categories: CategoryEntityResponseCollection;
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
