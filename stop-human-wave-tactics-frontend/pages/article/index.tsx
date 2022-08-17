import { NextPage } from "next";
import { Grid } from "@mui/material";
import { addApolloState, initializeApollo } from "../../lib/apollo";
import {
  getArticleQuery,
  getArticleQueryVariables,
} from "../../types/apollo_client";
import { getArticle } from "../../graphql/getArticle";
import { useRouter } from "next/router";
import { ArticleDetails } from "../../components/Article/ArticleDetails";
import { DisplayError } from "../../components/Common/DisplayError";

const ArticlePage: NextPage = () => {
  const router = useRouter();
  console.log(router);

  if (router.query.id === undefined || Array.isArray(router.query.id)) {
    return (
      <DisplayError
        error={{
          __typename: "Undefined ID",
          code: "01",
          message: "Undefined ID",
        }}
      ></DisplayError>
    );
  } else {
    return (
      <Grid>
        <ArticleDetails id={router.query.id} router={router}></ArticleDetails>
      </Grid>
    );
  }
};

export async function getStaticProps() {
  const client = initializeApollo();
  try {
    await client.query<getArticleQuery, getArticleQueryVariables>({
      query: getArticle,
    });
    return addApolloState(client, { props: {}, revalidate: 60 });
  } catch {
    return {
      notFound: true,
    };
  }
}

export default ArticlePage;
