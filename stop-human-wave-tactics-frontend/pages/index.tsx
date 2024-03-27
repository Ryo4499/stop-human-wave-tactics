import Grid from "@mui/material/Unstable_Grid2";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { request } from "graphql-request";
import useSWR from "swr";
import { Articles } from "../components/Articles";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import { getPageSize } from "../lib/pagination";
import { GraphqlError } from "../components/Common/DisplayError";
import { ArticlesCategorisTagsProps } from "../types/general";
import { getArticlesWithCategoriesAndTags } from "../graphql/getArticlesWithCategoriesAndTags";
import Sidebar from "../components/Common/Sidebar";
import Meta from "../components/utils/Head";
import { convDatetimeArticles, inArticlesCategoriesTags } from "../lib/utils";
import { ArticleEntityResponseCollection, CategoryEntity, CategoryEntityResponseCollection, GetArticlesQueryVariables, TagEntityResponseCollection } from "../types/graphql_res";

export const getStaticProps = (async ({
  locale,
}) => {
  const variables = {
    filters: {},
    pagination: { page: 1, pageSize: getPageSize() },
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

const ArticlesIndex: NextPage<ArticlesCategorisTagsProps> = ({
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
  const router = useRouter()
  if (data != null) {
    return (
      <Grid container direction="row" sx={{ flexGrow: 1 }}>
        <Meta
          title="Top Page"
          description="This page published latest articles."
          keyword={categories.data.map((value: CategoryEntity) => value.attributes?.name).join(" ")}
        />
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
    );
  } else {
    return <GraphqlError error={error} />;
  }
};

export default ArticlesIndex;
