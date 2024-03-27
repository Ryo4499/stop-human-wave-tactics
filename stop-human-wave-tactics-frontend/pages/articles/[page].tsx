import type { NextPage } from "next";
import { GetStaticPaths } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import { request } from "graphql-request";
import useSWR from "swr";
import { Articles } from "../../components/Articles";
import { getArticlesPages } from "../../graphql/getArticlesPages";
import { getBackendGraphqlURL } from "../../lib/graphqlClient";
import { getPageSize } from "../../lib/pagination";
import { ArticleEntityResponseCollection, CategoryEntityResponseCollection, GetArticlesPagesQuery, GetArticlesQueryVariables, GetArticlesWithCategoriesAndTagsQuery } from "../../types/graphql_res";
import { GraphqlError } from "../../components/Common/DisplayError";
import Sidebar from "../../components/Common/Sidebar";
import {
  ArticlesCategorisTagsProps,
  PageParams,
} from "../../types/general";
import Meta from "../../components/utils/Head";
import { convDatetimeArticles, inArticlesCategoriesTags } from "../../lib/utils";
import { getArticlesWithCategoriesAndTags } from "../../graphql/getArticlesWithCategoriesAndTags";

export const getStaticPaths = (async ({
  locales,
}) => {
  const paths: Array<PageParams> = [];
  if (locales != null) {
    for (const locale of locales) {
      const variables = {
        pagination: { pageSize: getPageSize() },
        locale: locale,
      };
      await request(getBackendGraphqlURL(), getArticlesPages, variables).then(
        (res) => {
          const articles = (res as GetArticlesPagesQuery).articles;
          const pageCount = articles?.meta.pagination.pageCount;
          if (pageCount != null) {
            const pages = Array.from({ length: pageCount }, (v, k) => k + 1);
            for (const page of pages) {
              // numberだとStaticPathできない
              paths.push({ params: { page: page.toString() }, locale: locale });
            }
          }
        }
      );
    }
  }
  return { paths: paths, fallback: "blocking" };
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params, locale }) => {
  const variables = {
    pagination: { page: parseInt(params.page, 10), pageSize: getPageSize() },
    sort: ["updatedAt:Desc", "publishedAt:Desc"],
    locale: locale,
  };
  const res = await request(
    getBackendGraphqlURL(),
    getArticlesWithCategoriesAndTags,
    variables
  ).then((result) => {
    return result;
  });
  if (res != null && inArticlesCategoriesTags(res)) {
    const result = {
      props: {
        articles: convDatetimeArticles((res.articles as ArticleEntityResponseCollection)),
        categories: res.categories,
        tags: res.tags,
        variables: variables,
      },
      notFound: false,
      revalidate: 3600,
    };
    return result;
  } else {
    return {
      notFound: true,
      revalidate: 3600,
    };
  }
})

const ArticlesPage: NextPage<ArticlesCategorisTagsProps> = ({
  articles,
  categories,
  tags,
  variables,
}) => {

  const { data, error } = useSWR([getArticlesWithCategoriesAndTags, variables], {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.status === 404) return
      // Only retry up to 10 times.
      if (retryCount >= 10) return
      // Retry after 3 seconds.
      setTimeout(() => revalidate({ retryCount }), 3000)
    },
    fallbackData: {
      articles: articles,
      categories: categories,
      tags: tags,
      variables: variables,
    },
  });
  if (data != null) {
    return (
      <Grid container sx={{ flexGrow: 1 }}>
        <Meta
          title="Articles Page"
          description="This page published articles sorted in descing ordered of the latest modified date."
          keyword={categories.data
            .map((value) => value.attributes?.name)
            .join(" ")}
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
            <Articles
              articles={data.articles}
              filter=""
            />
          </Grid>
          <Grid container xs={12} md={2} sx={{ flexGrow: 1 }}>
            <Sidebar categories={data.categories} tags={data.tags} />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <GraphqlError error={error} />;
  }
};

export default ArticlesPage;
