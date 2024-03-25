import Grid from "@mui/material/Unstable_Grid2";
import { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { request } from "graphql-request";
import useSWR from "swr";
import { getBackendGraphqlURL } from "../../lib/graphqlClient";
import { ArticleEntityResponseCollection, CategoryEntity, CategoryEntityResponseCollection, GetArticlesCategoriesQuery, GetArticlesQueryVariables } from "../../types/graphql_res";
import Sidebar from "../../components/Common/Sidebar";
import {
  ArticlesCategorisProps,
  UUIDParams,
} from "../../types/general";
import { getCategoriesUUID } from "../../graphql/getCategoriesUUID";
import { Articles } from "../../components/Articles";
import { GraphqlError } from "../../components/Common/DisplayError";
import { getArticlesCategories } from "../../graphql/getArticlesCategories";
import Meta from "../../components/utils/Head";
import { convDatetimeArticles } from "../../lib/utils";

export const getStaticPaths = (async ({
  locales,
}) => {
  const paths: Array<UUIDParams> = [];
  if (locales != null) {
    for (const locale of locales) {
      const variables = { pagination: {}, locale: locale };
      await request(getBackendGraphqlURL(), getCategoriesUUID, variables).then(
        (response) => {
          const { categories } = response as { categories: CategoryEntityResponseCollection };
          categories.data.map((category: CategoryEntity) => {
            if (category.attributes?.uuid) {
              paths.push({
                params: { uuid: category.attributes.uuid },
                locale: locale,
              })
            }
          });
        }
      );
    }
  }
  return { paths: paths, fallback: "blocking" };
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params, locale }) => {
  const isGetCategoriesQuery = (object: any): object is GetArticlesCategoriesQuery => { return 'categories' in object }
  const variables = {
    filters: {
      category: {
        uuid: { eq: params.uuid },
      },
    },
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
  if (res != null && isGetCategoriesQuery(res)) {
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
  const router = useRouter();
  if (data != null && typeof router.query.name === "string") {
    return (
      <Grid container sx={{ flexGrow: 1 }}>
        <Meta
          title="Searched articles by category name"
          description="This page published articles searched by category name."
          keyword={categories.data
            .map((value) => value.attributes?.name)
            .join(" ")}
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
            <Articles
              articles={data.articles}
              filter={router.query.name}
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
