import React from "react";
import Link from "next/link";
import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useLazyQuery } from "@apollo/client";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Card,
  CardActionArea,
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
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"
import PaticleParams from "../../styles/presets/nyancat2-articles.json"
import { getPageSize } from "../../lib/pagination";

type ArticlesProps = {
  page: number;
  setPage: (value: number) => void;
};

export const Articles = ({ page, setPage }: ArticlesProps) => {
  const router = useRouter()
  const pagesize = getPageSize()
  const { data, loading, error } = useLazyQuery<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >(getArticles, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    variables: {
      filters: {},
      pagination: {
        page: page,
        pageSize: pagesize,
      },
      sort: ["publishedAt:desc", "createdAt:desc"],
      locale: router.locale,
    },
  });

  // load particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    router.beforePopState(({ url, as }: { url: string, as: string }): boolean => {
      if (router.route === url) {
        setPage(parseInt(as.split("/").slice(-1)[0], 10))
        router.push(as)
        return true
      } else {
        return false
      }
    })
  })

  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    router.push(`/articles/${value}`);
  };

  if (data?.articles?.data != null) {
    return (
      <Grid container direction="column" sx={{ flexGrow: 1 }} xs={12}>
        {/* @ts-ignore */}
        <Particles
          init={particlesInit}
          params={PaticleParams} />
        {isMobile ?
          <Grid container direction="column" sx={{ flexGrow: 1 }} spacing={2}>
            {data?.articles?.data.map((article) => {
              return (
                <Grid xs={12} key={article.id}>
                  <Card>
                    <CardActionArea>
                      <Link href={`/article/${article.id}`}>
                        <CardMedia
                          component="img"
                          image={
                            article.attributes?.thumbnail?.data?.attributes?.url
                          }
                        />
                      </Link>
                      <CardContent>
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
                      </CardContent>
                    </CardActionArea>
                    <CardActions >
                      <Button onClick={() => { router.push(`/article/${article.id}`) }} size="small">
                        More Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
          :
          <Grid container direction="row" sx={{ flexGrow: 1 }} spacing={2}>
            {data?.articles?.data.map((article) => {
              return (
                <Grid xs={6} key={article.id} >
                  <Card>
                    <Link href={`/article/${article.id}`}>
                      <CardMedia
                        component="img"
                        image={
                          article.attributes?.thumbnail?.data?.attributes?.url
                        }
                      />
                    </Link>
                    <CardContent>
                      <Typography variant="h5" py={2}>
                        {article.attributes?.title}
                      </Typography>
                      <Typography>{article.attributes?.summary}</Typography>
                      <Typography>
                        {article.attributes?.updatedAt
                          .replace("T", " ")
                          .replace(/\..*$/g, "")
                          .replace(/\-/g, "/")}
                      </Typography>
                    </CardContent>
                    <CardActions >
                      <Button onClick={() => { router.push(`/article/${article.id}`) }} size="small">
                        More Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        }
        <Grid container direction="row" justifyContent="center">
          <Pagination
            page={page}
            count={data?.articles?.meta.pagination.pageCount}
            onChange={handleChange}
            renderItem={(item) => {
              return (<Link href={`/articles/${item.page}`} key={item.page} passHref>
                <PaginationItem {...item} />
              </Link>)
            }
            }
          ></Pagination>
        </Grid>
      </Grid>
    );
  } else {
    return null
  }
};
