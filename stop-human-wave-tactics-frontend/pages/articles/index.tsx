import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import React, { useState } from "react";
import { addApolloState, initializeApollo } from "../../lib/apollo";
import { getArticles } from "../../graphql/getArticles";
import { useRouter } from "next/router";
import { Articles } from "../../components/Articles/Articles";
import { getCategories } from "../../graphql/getCategories";
import { ArticleEntityResponseCollection } from "../../types/apollo_client";
import { getPageSize } from "../../lib/pagination";

type IStaticProps = {
  params: { page: string },
  locale: string
}

export const getStaticProps = async ({ params, locale }: IStaticProps) => {
  const client = initializeApollo()
  try {
    const { data } = await client.query({
      query: getArticles,
      variables: {
        paginaiton: { page: params.page, pagesize: getPageSize() },
        locale: locale
      }
    });
    return addApolloState(client, {
      props: {
        articles: data,
      },
      revalidate: 300,
    })
  } catch {
    return {
      notFound: true,
    };
  }
};

const ArticlesPage: NextPage = (props) => {
  const router = useRouter()
  const [page, setPage] = useState(
    router.query.page === undefined
      ? 1
      : parseInt(router.query.page as string, 10)
  );
  return <Articles page={page} setPage={setPage}></Articles>;
};

export default ArticlesPage;
