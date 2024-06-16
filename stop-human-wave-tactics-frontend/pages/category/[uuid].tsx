import Grid from "@mui/material/Unstable_Grid2";
import { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { request } from "graphql-request";
import useSWR from "swr";
import { getBackendGraphqlURL } from "../../lib/graphqlClient";
import {
  ArticleEntityResponseCollection,
  CategoryEntity,
  CategoryEntityResponseCollection,
  GetCategoriesByUuidQuery,
  GetArticlesQueryVariables,
  GetTagsByUuidDocument,
  TagEntityResponseCollection,
  GetArticlesWithCategoriesAndTagsQuery,
} from "../../types/graphql_res";
import Sidebar from "../../components/Common/Sidebar";
import { ArticlesCategorisTagsProps, UUIDParams } from "../../types/general";
import { getCategoriesByUUID } from "../../graphql/getCategoriesByUUID";
import { Articles } from "../../components/Articles";
import { GraphqlError } from "../../components/Common/DisplayError";
import Meta from "../../components/Common/Meta";
import {
  convDatetimeArticles,
  inArticlesCategoriesTags,
} from "../../lib/utils";
import { getArticlesWithCategoriesAndTags } from "../../graphql/getArticlesWithCategoriesAndTags";
import { useLocale } from "../../lib/locale";

export const getStaticPaths = (async ({ locales }) => {
  const paths: Array<UUIDParams> = [];
  if (locales != null) {
    for (const locale of locales) {
      const variables = { pagination: {}, locale: locale };
      await request(
        getBackendGraphqlURL(),
        getCategoriesByUUID,
        variables,
      ).then((response) => {
        const { categories } = response as {
          categories: CategoryEntityResponseCollection;
        };
        categories.data.map((category: CategoryEntity) => {
          if (category.attributes?.uuid) {
            paths.push({
              params: { uuid: category.attributes.uuid },
              locale: locale,
            });
          }
        });
      });
    }
  }
  return { paths: paths, fallback: "blocking" };
}) satisfies GetStaticPaths;

export const getStaticProps = async ({ params, locale }) => {
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
    getArticlesWithCategoriesAndTags,
    variables,
  ).then((result) => {
    return result;
  });
  if (res != null && inArticlesCategoriesTags(res)) {
    const result = {
      props: {
        articles: convDatetimeArticles(
          res.articles as ArticleEntityResponseCollection,
        ),
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
};

const ArticlesPage: NextPage<ArticlesCategorisTagsProps> = ({
  articles,
  categories,
  tags,
  variables,
}: {
  articles: ArticleEntityResponseCollection;
  categories: CategoryEntityResponseCollection;
  tags: TagEntityResponseCollection;
  variables: GetArticlesQueryVariables;
}) => {
  const { data, error } = useSWR(
    [getArticlesWithCategoriesAndTags, variables],
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.status === 404) return;
        // Only retry up to 10 times.
        if (retryCount >= 10) return;
        // Retry after 3 seconds.
        setTimeout(() => revalidate({ retryCount }), 3000);
      },
      fallbackData: {
        articles: articles,
        categories: categories,
        tags: tags,
        variables: variables,
      },
    },
  );
  const router = useRouter();
  const { t } = useLocale();
  if (data != null && typeof router.query.name === "string") {
    return (
      <Grid container sx={{ flexGrow: 1 }}>
        <Meta
          title="Searched articles by category name"
          description="This page published articles searched by category name."
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
            <Articles
              articles={data.articles}
              filter={`${t.categories}: ${router.query.name}`}
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
