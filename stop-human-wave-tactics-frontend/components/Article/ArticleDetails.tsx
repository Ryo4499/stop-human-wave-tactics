import { useQuery } from "@apollo/client";
import type { NextRouter } from "next/router";
import DisplayError from "../../components/Common/DisplayError";
import Loading from "../../components/Common/Loading";
import { getArticle } from "../../graphql/getArticle";
import {
  Article,
  getArticleQuery,
  getArticleQueryVariables,
} from "../../types/apollo_client";
import { Container, Skeleton, Typography } from "@mui/material";
import conv_md from "../../lib/md";

type ArticleProps = {
  id: string;
  router: NextRouter;
};

export const ArticleDetails = ({ id, router }: ArticleProps) => {
  const { data, loading, error } = useQuery<
    getArticleQuery,
    getArticleQueryVariables
  >(getArticle, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    variables: {
      id: id,
      locale: router.locale,
    },
  });
  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;
  const article = data.article.data.attributes;
  return (
    <Container>
      <Typography variant="h1">
        {loading ? <Skeleton /> : article.title}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: conv_md(article) }}></div>
    </Container>
  );
};
