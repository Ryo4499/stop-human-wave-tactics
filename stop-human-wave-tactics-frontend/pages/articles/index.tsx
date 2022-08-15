import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import type { NextPage } from "next";
import { addApolloState, initializeApollo } from "../../lib/apollo";
import {
  getArticlesQuery,
  getArticlesQueryVariables,
} from "../../types/apollo_client";
import { getArticles } from "../../graphql/getArticles";
import { useRouter } from "next/router";
import { Pagination } from "@mui/material";
import { Articles } from "../../components/Articles/Articles";

const ArticlesPage: NextPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(
    router.query.page === undefined
      ? 1
      : parseInt(router.query.page as string, 10)
  );
  return (
    <Grid>
      <Articles page={page} setPage={setPage} router={router}></Articles>
    </Grid>
  );
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
