import type { NextPage } from "next";
import { GetStaticPaths } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import { request } from "graphql-request";
import useSWR from "swr";
import { Articles } from "../../components/Articles";
import { getArticlesPages } from "../../graphql/getArticlesPages";
import { getBackendGraphqlURL } from "../../lib/graphqlClient";
import { getPageSize } from "../../lib/pagination";
import { ArticleEntityResponseCollection, CategoryEntityResponseCollection, GetArticlesCategoriesQuery, GetArticlesQueryVariables } from "../../types/graphql_res";
import { GraphqlError } from "../../components/Common/DisplayError";
import Sidebar from "../../components/Common/Sidebar";
import {
  ArticlesCategorisProps,
  PageParams,
} from "../../types/general";
import { getArticlesCategories } from "../../graphql/getArticlesCategories";
import Meta from "../../components/utils/Head";
import { convDatetimeArticles } from "../../lib/utils";

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
        (response) => {
          const { articles } = response as { articles: ArticleEntityResponseCollection };
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
  const isGetArticlesQuery = (object: any): object is GetArticlesCategoriesQuery => { return 'articles' in object }
  const variables = {
    pagination: { page: parseInt(params.page, 10), pageSize: getPageSize() },
    sort: ["updatedAt:Desc", "publishedAt:Desc"],
    locale: locale,
  };
  const res = await request(
    getBackendGraphqlURL(),
    getArticlesCategories,
    variables
  ).then((result) => {
    return result;
  });
  if (res != null && isGetArticlesQuery(res)) {
    const result = {
      props: {
        articles: convDatetimeArticles((res.articles as ArticleEntityResponseCollection)),
        categories: res.categories,
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

const ArticlesPage: NextPage<ArticlesCategorisProps> = ({
  articles,
  categories,
  variables,
}: { articles: ArticleEntityResponseCollection, categories: CategoryEntityResponseCollection, variables: GetArticlesQueryVariables }) => {
  
  const { data, error } = useSWR([getArticlesCategories, variables], {
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
              filter={null}
            />
          </Grid>
          <Grid container xs={12} md={2} sx={{ flexGrow: 1 }}>
            <Sidebar categories={data.categories} />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <GraphqlError error={error} />;
  }
};

export default ArticlesPage;
