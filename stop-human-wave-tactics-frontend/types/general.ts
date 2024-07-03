import {
  ArticleEntityResponseCollection,
  CategoryEntityResponseCollection,
  GetArticlesQueryVariables,
  GetCategoriesAndTagsQueryVariables,
  TagEntityResponseCollection,
} from "./graphql_res";

export interface CategoriesAndTagsStaticProps {
  props: CategoriesAndTagsProps;
  notFound: boolean;
  revalidate: number;
}

export interface CategoriesAndTagsProps {
  categories: CategoryEntityResponseCollection;
  tags: TagEntityResponseCollection
}

export interface CategoriesAndTagsResponseProps extends CategoriesAndTagsProps {
  variables: GetCategoriesAndTagsQueryVariables | undefined | null;
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
  params: { id: string | undefined };
  locale: string;
}

export type UUIDStaticProps = {
  params: { id: string };
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
