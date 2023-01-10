import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DisplayError from "../../components/Common/DisplayError";
import Loading from "../../components/Common/Loading";
import { getArticle } from "../../graphql/getArticle";
import {
  Article,
  GetArticleQuery,
  GetArticleQueryVariables,
} from "../../types/apollo_client";
import Grid from "@mui/material/Unstable_Grid2";
import { useCallback } from "react";
import { Skeleton, Typography } from "@mui/material";
import MdContent from "../Common/MdContent";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"
import PaticleParams from "../../styles/presets/nyancat2-article-details.json"

type ArticleProps = {
  id: string;
};

export const ArticleDetails = ({ id }: ArticleProps) => {
  const router = useRouter()
  const { data, loading, error } = useLazyQuery<
    GetArticleQuery,
    GetArticleQueryVariables
  >(getArticle, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    variables: {
      id: id,
      locale: router.locale,
    },
  });
  // load particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  if (loading) return <Loading />;

  if (error) return <DisplayError error={error} />;

  if (data?.article?.data?.attributes != null) {
    const article = data.article.data.attributes;
    return (
      <Grid container xs={12} sx={{ flexGrow: 1 }}>
        {/* @ts-ignore */}
        <Particles
          init={particlesInit}
          params={PaticleParams} />
        <Grid container direction="column" sx={{ flexGrow: 1, backgroundColor: "white", }}>
          <Grid>
            <Typography variant="h1">
              {article.title}
            </Typography></Grid>
          <Grid>
            <MdContent content={article.content}></MdContent>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return null
  }
};
