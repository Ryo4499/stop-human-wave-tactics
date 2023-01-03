import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import React, { useState } from "react";
import { addApolloState, initializeApollo } from "../../lib/apollo";
import { getArticles } from "../../graphql/getArticles";
import { useRouter } from "next/router";
import { Articles } from "../../components/Articles/Articles";
import { getCategories } from "../../graphql/getCategories";

const ArticlesPage: NextPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(
    router.query.page === undefined
      ? 1
      : parseInt(router.query.page as string, 10)
  );
  return <Articles page={page} setPage={setPage} router={router}></Articles>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" }
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo()
  try {
    const articles = await client.query({
      query: getArticles,
    });
    const categories = await client.query({ query: getCategories })
    return addApolloState(client, {
      props: {
        articles: articles,
        categories: categories,
      },
      revalidate: 300,
    });
  } catch {
    return {
      notFound: true,
    };
  }
};

export default ArticlesPage;
