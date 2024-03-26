import Grid from "@mui/material/Unstable_Grid2";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { request } from "graphql-request";
import useSWR from "swr";
import { Articles } from "../components/Articles";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import Sidebar from "../components/Common/Sidebar";
import { ArticlesCategorisProps } from "../types/general";
import { SearchNotFound } from "../components/Common/SearchNotFound";
import { getArticlesCategories } from "../graphql/getArticlesCategories";
import { GraphqlError } from "../components/Common/DisplayError";
import { ArticleEntity, ArticleEntityResponseCollection, GetArticlesCategoriesQuery } from "../types/graphql_res";
import Meta from "../components/utils/Head";
import { convDatetimeArticles } from "../lib/utils";

export const getStaticProps = (async ({
  locale,
}) => {
  const isArticlesCategoriesQuery = (object: any): object is GetArticlesCategoriesQuery => {
    return "articles" in object && "categories" in object;
  };
  const variables = {
    pagination: {},
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
  if (res != null && isArticlesCategoriesQuery(res)) {
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

const ArticlesIndex: NextPage<ArticlesCategorisProps> = ({
  articles,
  categories,
  variables,
}) => {

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
  const router = useRouter();
  const filter =
    router.query.title != null && typeof router.query.title === "string"
      ? router.query.title
      : "";
  if (data != null) {
    const filterArticles = data.articles.data.filter(
      (article: ArticleEntity) => {
        return article.attributes?.title.toLowerCase().includes(filter.toLowerCase());
      }
    );

    const filterArticlesCollection = {
      data: filterArticles,
      meta: {
        pagination: {
          page: 1,
          pageCount: 1,
          pageSize: filterArticles.length,
          total: 1,
        },
      },
    };
    const filterArticlesResponseCollection = Object.assign(
      data.articles,
      filterArticlesCollection
    );
    return (
      <Grid container direction="row" sx={{ flexGrow: 1 }}>
        <Meta
          title="Searched articles by title"
          description="This page published articles searched by title."
          keyword={filter}
        />
        <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
          {filterArticles.length === 0 ? (
            <SearchNotFound filter={filter} />
          ) : (
            <Articles
              articles={filterArticlesResponseCollection}
              filter={filter}
            />
          )}
        </Grid>
        <Grid container xs={12} md={2} sx={{ flexGrow: 1 }}>
          <Sidebar categories={data.categories} />
        </Grid>
      </Grid>
    );
  } else {
    return <GraphqlError error={error} />;
  }
};

export default ArticlesIndex;
