import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import { addApolloState, initializeApollo } from "../../lib/apollo";
import { getArticle } from "../../graphql/getArticle";
import { useRouter } from "next/router";
import { ArticleDetails } from "../../components/Article/ArticleDetails";
import DisplayError from "../../components/Common/DisplayError";
import { useLocale } from "../../lib/locale";

const ArticlePage: NextPage = () => {
  const router = useRouter();

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
export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" }
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();
  const { locale, locales, t } = useLocale()
  try {
    const article = await client.query({
      query: getArticle,
    });
    return addApolloState(client, { props: { article: article }, revalidate: 300 });
  } catch {
    return {
      notFound: true,
    };
  }
}

export default ArticlePage;
