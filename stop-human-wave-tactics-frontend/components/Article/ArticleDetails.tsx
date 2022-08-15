import { useQuery } from "@apollo/client";
import { LocalSee } from "@mui/icons-material";
import { NextRouter, Router } from "next/router";
import { DisplayError } from "../../components/Common/DisplayError";
import { Loading } from "../../components/Common/Loading";
import { getArticle } from "../../graphql/getArticle";
import {
  getArticleQuery,
  getArticleQueryVariables,
} from "../../types/apollo_client";
import { Container, Grid } from "@mui/material";

interface ArticleProps {
  id: string;
  router: NextRouter;
}

export const ArticleDetails: React.FC<ArticleProps> = ({ id, router }) => {
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
  console.log(data);
  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;
  return <Container></Container>;
};
