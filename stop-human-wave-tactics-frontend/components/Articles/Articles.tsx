import React, { SetStateAction } from "react";
import Link from "next/link";
import NextLink from "next/link";
import Image from "next/image";
import parse, {
  attributesToProps,
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
  Element,
} from "html-react-parser";
import { useState, ChangeEvent } from "react";
import { useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  PaginationItem,
  Container,
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
  getArticlesQuery,
  getArticlesQueryVariables,
  PaginationArg,
  PublicationState,
} from "../../types/apollo_client";
import { Loading } from "../Common/Loading";
import { DisplayError } from "../Common/DisplayError";
import { NextRouter } from "next/router";

interface ArticlesProps {
  page: number;
  setPage: (value: number) => void;
  router: NextRouter;
}

const perPage = parseInt(process.env.PER_PAGE || "1");

export const Articles: React.FC<ArticlesProps> = ({
  page,
  setPage,
  router,
}) => {
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
  console.log(data);
  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.type === "tag") {
        const elem = domNode;
        const props = attributesToProps(domNode.attribs);
        if (domNode.attribs && domNode.name === "a") {
          return (
            <Link href={props.href}>
              {domToReact(domNode.children, options)}
            </Link>
          );
        } else if (domNode.attribs && domNode.name == "img") {
          return <CardMedia component="img" src={props.src}></CardMedia>;
        }
      }
    },
  };

  return (
    <Container>
      <Grid>
        {data?.articles?.data.map((article) => {
          if (!article) return null;
          else {
            return (
              <Card key={article.id}>
                <Link href={`/article/${article.id}`}>
                  <CardMedia
                    component="img"
                    image={article.attributes?.thumbnail?.data?.attributes?.url}
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
            );
          }
        })}
      </Grid>
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
    </Container>
  );
};
