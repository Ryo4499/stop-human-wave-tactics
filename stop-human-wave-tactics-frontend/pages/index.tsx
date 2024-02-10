import Grid from "@mui/material/Unstable_Grid2";
import { GetStaticProps } from "next";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import useSWR from "swr";
import { Articles } from "../components/Articles";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import { getPageSize } from "../lib/pagination";
import { GraphqlError } from "../components/Common/DisplayError";
import { ArticlesCategorisProps, IStaticProps } from "../types/general";
import { getArticlesCategories } from "../graphql/getArticlesCategories";
import Sidebar from "../components/Common/Sidebar";
import Meta from "../components/utils/Head";
import { ArticleEntityResponseCollection, CategoryEntity, CategoryEntityResponseCollection, GetArticlesCategoriesQuery, GetArticlesPagesQueryVariables, GetArticlesQueryVariables } from "../types/graphql_res";

export const getStaticProps = (async ({
  locales,
  locale,
  defaultLocale,
}: IStaticProps) => {
  const variables = {
    filters: {},
    pagination: { page: 1, pageSize: getPageSize() },
    sort: ["updatedAt:Desc", "publishedAt:Desc"],
    locale: locale,
  };
  const res = await request(
    getBackendGraphqlURL(),
    getArticlesCategories,
    variables
  ).then((result: GetArticlesCategoriesQuery) => {
    return result;
  });
  if (res != null) {
    const result = {
      props: {
        articles: res.articles,
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
}) satisfies GetStaticProps;

const ArticlesIndex: NextPage<ArticlesCategorisProps> = ({
  articles,
  categories,
  variables,
}: { articles: ArticleEntityResponseCollection, categories: CategoryEntityResponseCollection, variables: GetArticlesQueryVariables }) => {
  const { data, error } = useSWR([getArticlesCategories, variables], {
    fallbackData: {
      articles: articles,
      categories: categories,
      variables: variables,
    },
  });
  const router = useRouter();
  const [page, setPage] = useState(
    router.query.page == null ? 1 : parseInt(router.query.page as string, 10)
  );
  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);
  if (data != null) {
    return (
      <Grid container direction="row" sx={{ flexGrow: 1 }}>
        <Meta
          title="Top Page"
          description="This page published latest articles."
          keyword={categories.data
            .map((value: CategoryEntity) => value.attributes?.name)
            .join(" ")}
        />
        <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
          <Articles
            page={page}
            setPage={setPage}
            articles={data.articles}
            filter={null}
          />
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
