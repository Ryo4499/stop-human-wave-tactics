import React from "react";
import Link from "next/link";
import { useState, useEffect, ChangeEvent } from "react";
import { useQuery } from "@apollo/client";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router"
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Pagination,
  PaginationItem,
  Stack,
  Link as MuiLink,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { getArticles } from "../../graphql/getArticles";
import {
  Article,
  ArticleEntity,
  ArticleFiltersInput,
  ArticleLocalizationsArgs,
  GetArticlesQuery,
  GetArticlesQueryVariables,
  GetCategoriesQuery,
  GetCategoriesQueryVariables,
  PaginationArg,
  PublicationState,
} from "../../types/apollo_client";
import Loading from "../Common/Loading";
import DisplayError from "../Common/DisplayError";
import type { NextRouter } from "next/router";
import { isMobile } from "react-device-detect"

type ArticlesProps = {
  page: number;
  setPage: (value: number) => void;
  router: NextRouter;
};

const perPage = parseInt(process.env.PER_PAGE || "2");

export const Articles = ({ page, setPage }: ArticlesProps) => {
  const router = useRouter()
  const { data, loading, error } = useQuery<
    GetArticlesQuery,
    GetArticlesQueryVariables
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
    console.log(value)
    setPage(value);
    router.push(`/articles/${value}`);
  };
  return (
    <Grid container direction="column" sx={{ flexGrow: 1 }} xs={12}>
      {isMobile ?
        <Grid container direction="column" sx={{ flexGrow: 1 }} spacing={2}>
          {data?.articles?.data.map((article: ArticleEntity) => {
            if (!article) return null;
            else {
              return (
                <Grid xs={12} key={article.id}>
                  <Card>
                    <Link href={`/article/${article.id}`}>
                      <CardMedia
                        component="img"
                        image={
                          article.attributes?.thumbnail?.data?.attributes?.url
                        }
                      />
                    </Link>
                    <CardContent></CardContent>
                    <Typography variant="h5" component="div">
                      {article.attributes?.title}
                    </Typography>
                    <Typography>{article.attributes?.summary}</Typography>
                    <Typography>
                      {article.attributes?.updatedAt
                        .replace("T", " ")
                        .replace(/\..*$/g, "")
                        .replace(/\-/g, "/")}
                    </Typography>
                    <CardActions>
                      <Link href={`/article/${article.id}`}>
                        <Button size="small">More Details</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              )
            }
          })}
        </Grid>
        :
        <Grid container direction="row" sx={{ flexGrow: 1 }} spacing={2}>
          {data?.articles?.data.map((article: ArticleEntity) => {
            if (!article) return null;
            else {
              return (
                <Grid xs={6} key={article.id}>
                  <Card>
                    <Link href={`/article/${article.id}`}>
                      <CardMedia
                        component="img"
                        image={
                          article.attributes?.thumbnail?.data?.attributes?.url
                        }
                      />
                    </Link>
                    <CardContent></CardContent>
                    <Typography variant="h5" component="div">
                      {article.attributes?.title}
                    </Typography>
                    <Typography>{article.attributes?.summary}</Typography>
                    <Typography>
                      {article.attributes?.updatedAt
                        .replace("T", " ")
                        .replace(/\..*$/g, "")
                        .replace(/\-/g, "/")}
                    </Typography>
                    <CardActions>
                      <Link href={`/article/${article.id}`}>
                        <Button size="small">More Details</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              )
            }
          })}
        </Grid>
      }
      <Grid container direction="row" justifyContent="center">
        <Pagination
          page={page}
          count={data?.articles?.meta.pagination.pageCount}
          onChange={handleChange}
          renderItem={(item) => (
            <Link href={`/articles/${item.page}`} key={item.page} passHref>
              <PaginationItem {...item} />
            </Link>
          )}
        ></Pagination>
      </Grid>
    </Grid>
  );
};
