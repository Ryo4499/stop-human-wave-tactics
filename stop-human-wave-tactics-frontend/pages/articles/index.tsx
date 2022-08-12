import Grid from "@mui/material/Grid";
import React from "react";
import type { NextPage } from "next";
import { addApolloState, initializeApollo } from "../../lib/apollo-client";
import {
  getArticlesQuery,
  getArticlesQueryVariables,
} from "../../types/apollo_client";
import { getArticles } from "../../graphql/getArticles";
import { useRouter } from "next/router";

const ArticlesPage: NextPage = () => {
  const { query } = useRouter();
  const page = parseInt(query?.page as string, 10);
  return <Grid></Grid>;
};

export async function getStaticProps() {
  const client = initializeApollo();
  try {
    await client.query<getArticlesQuery, getArticlesQueryVariables>({
      query: getArticles,
    });
    return addApolloState(client, { props: {}, revalidate: 60 });
  } catch {
    return {
      notFound: true,
    };
  }
}

export default ArticlesPage;
