import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DisplayError from "../../components/Common/DisplayError";
import Loading from "../../components/Common/Loading";
import { getArticles } from "../../graphql/getArticles";
import {
  Article,
  GetArticlesQuery,
  GetArticlesQueryVariables,
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
  uuid: string;
};

export const ArticleDetails = () => {
  const router = useRouter()
  // load particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  if (data?.articles?.data[0]?.attributes != null) {
    const article = data.articles.data[0]?.attributes;
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
