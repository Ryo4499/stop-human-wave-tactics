import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { getArticles } from "../../graphql/getArticles";
import {
  ArticleFiltersInput,
  ArticleLocalizationsArgs,
  getArticlesQuery,
  getArticlesQueryVariables,
  PaginationArg,
  PublicationState,
} from "../../types/apollo_client";

const perPage = parseInt(process.env.PER_PAGE || "10");

//export const Articles = (props: ArticleLocalizationsArgs) => {
//  const { data, loading, error } = useQuery<
//    getArticlesQuery,
//    getArticlesQueryVariables
//  >(getArticles, {
//    fetchPolicy: "cache-and-network",
//    nextFetchPolicy: "cache-first",
//    variables: {},
//  });
//
//  return (
//    <Grid>
//      <h1>test</h1>
//    </Grid>
//  );
//};
