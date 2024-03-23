import Grid from "@mui/material/Unstable_Grid2";
import { GetStaticPaths, NextPage } from "next";
import { request } from "graphql-request";
import useSWR from "swr";
import { ArticleDetails } from "../../components/Article";
import { getBackendGraphqlURL } from "../../lib/graphqlClient";
import { ArticleEntity, ArticleEntityResponseCollection, CategoryEntityResponseCollection, GetArticlesCategoriesQuery, GetArticlesQueryVariables } from "../../types/graphql_res";
import { getArticlesUUID } from "../../graphql/getArticlesUUID";
import Sidebar from "../../components/Common/Sidebar";
import {
  ArticlesCategorisProps,
  UUIDParams,
} from "../../types/general";
import { getArticlesCategories } from "../../graphql/getArticlesCategories";
import { GraphqlError } from "../../components/Common/DisplayError";
import Meta from "../../components/utils/Head";
import { convDatetimeArticles } from "../../lib/utils";

export const getStaticPaths = (async ({
  locales,
}) => {
  // get all articles uuid and generate article detail page
  const paths: Array<UUIDParams> = [];
  if (locales != null) {
    for (const locale of locales) {
      const variables = { pagination: {}, locale: locale };
      await request(getBackendGraphqlURL(), getArticlesUUID, variables).then((response) => {
        const { articles } = response as { articles: ArticleEntityResponseCollection };
        articles.data.map((article: ArticleEntity) => {
          if (article.attributes?.uuid) {
            paths.push({
              params: { uuid: article.attributes.uuid },
              locale: locale,
            });
          }
        });
      }
      );
    }
  }
  return { paths: paths, fallback: "blocking" };
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params, locale }: UUIDParams) => {
  const isGetArticlesCategoriesQuery = (object: any): object is GetArticlesCategoriesQuery => {
    return 'articles' in object && 'categories' in object;
  }
  // get all articles and categories
  const variables = {
    filters: { uuid: { eq: params?.uuid } },
    pagination: {},
    sort: ["updatedAt:Desc", "publishedAt:Desc"],
    locale: locale,
  };
  const res: GetArticlesCategoriesQuery | unknown = await request(
    getBackendGraphqlURL(),
    getArticlesCategories,
    variables
  ).then((result) => {
    return result;
  });
  if (res != null && isGetArticlesCategoriesQuery(res)) {
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

const ArticlePage: NextPage<ArticlesCategorisProps> = ({
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
          title="Article Details Page"
          description="This page published article details."
          keyword={categories.data
            .map((value) => value.attributes?.name)
            .join(" ")}
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
            <ArticleDetails articles={data.articles} />
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

export default ArticlePage;
