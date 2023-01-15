import { useRouter } from "next/router";
import {
  ArticleEntityResponseCollection,
} from "../../types/apollo_client";
import Grid from "@mui/material/Unstable_Grid2";
import { useCallback } from "react";
import { Skeleton, Typography } from "@mui/material";
import MdContent from "../Common/MdContent";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"

type ArticleProps = {
  uuid: string;
};

export const ArticleDetails = ({ articles, mainParticle }: { articles: ArticleEntityResponseCollection, mainParticle: object }) => {
  const router = useRouter()
  // load particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  if (articles?.data[0]?.attributes != null) {
    const article = articles.data[0]?.attributes;
    return (
      <Grid container xs={12} sx={{ flexGrow: 1 }}>
        {/* @ts-ignore */}
        <Particles
          init={particlesInit}
          params={mainParticle}
        />
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
