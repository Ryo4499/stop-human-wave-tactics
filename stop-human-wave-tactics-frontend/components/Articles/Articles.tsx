import { useQuery } from "@apollo/client";
import {
  Grid,
  Pagination,
  PaginationItem,
  Link as MuiLink,
} from "@mui/material";
import { getArticles } from "../../graphql/getArticles";
import {
  ArticleEntity,
  ArticleFiltersInput,
  ArticleLocalizationsArgs,
  getArticlesQuery,
  getArticlesQueryVariables,
  PaginationArg,
  PublicationState,
} from "../../types/apollo_client";
import { Loading } from "../Common/Loading";
import { DisplayError } from "../Common/DisplayError";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useState, ChangeEvent } from "react";

const perPage = parseInt(process.env.PER_PAGE || "1");

export const Articles = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery<
    getArticlesQuery,
    getArticlesQueryVariables
  >(getArticles, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    variables: {
      filters: {},
      pagination: {
        page: page,
        pageSize: perPage,
      },
      sort: ["publishedAt:desc", "createdAt:desc"],
      locale: router.locale,
    },
  });
  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    router.push(`/articles/${value}`);
  };

  return (
    <Grid>
      <ul>
        {data?.articles?.data.map((article) => {
          if (!article) return null;
          else {
            return <li key={article.id}>{article.attributes?.title}</li>;
          }
        })}
      </ul>
      <Pagination
        page={data?.articles?.meta.pagination.page}
        count={data?.articles?.meta.pagination.pageCount}
        onChange={handleChange}
      ></Pagination>
    </Grid>
  );
};
