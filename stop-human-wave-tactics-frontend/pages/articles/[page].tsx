import { GetStaticPaths } from "next";
import { getArticles } from "../../graphql/getArticles";
import { initializeApollo, useApollo } from "../../lib/apollo";
import {
  ArticleEntityResponseCollection,
  GetArticleQuery,
} from "../../types/apollo_client";
export { default } from "./index";

