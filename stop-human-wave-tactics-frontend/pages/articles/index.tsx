import { GetStaticProps } from "next";
import React, { useState } from "react";
import type { NextPage } from "next";
import { addApolloState, initializeApollo } from "../../lib/apollo";
import {
  GetArticlesQuery,
  GetArticlesQueryVariables,
} from "../../types/apollo_client";
import { getArticles } from "../../graphql/getArticles";
import { useRouter } from "next/router";
import { Articles } from "../../components/Articles/Articles";

const ArticlesPage: NextPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(
    router.query.page === undefined
      ? 1
      : parseInt(router.query.page as string, 10)
  );
  return <Articles page={page} setPage={setPage} router={router}></Articles>;
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();
  try {
    await client.query({
      query: getArticles,
    });
    return addApolloState(client, {
      props: {},
      revalidate: 3600,
    });
  } catch {
    return {
      notFound: true,
    };
  }
};

export default ArticlesPage;
