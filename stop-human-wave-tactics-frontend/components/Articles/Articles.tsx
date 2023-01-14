import Link from "next/link";
import { useEffect, useCallback, ChangeEvent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Pagination,
  PaginationItem,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import {
  ArticleEntity,
  ArticleEntityResponseCollection,
} from "../../types/apollo_client";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"
import PaticleParams from "../../styles/presets/nyancat2-articles.json"

type ArticlesProps = {
  page: number;
  setPage: (value: number) => void;
  articles: ArticleEntityResponseCollection
};

type ArticlesPropsContent = {
  page: number;
  setPage: (value: number) => void;
  pageCount: number | undefined;
};


const Content = ({ page, setPage, pageCount }: ArticlesPropsContent) => {
  const router = useRouter()
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    router.push(`/articles/${value}`);
  };
  return (
    <Pagination
      page={page}
      count={pageCount}
      onChange={handleChange}
      renderItem={(item) => {
        return (
          <PaginationItem  {...item} />
        )
      }
      }
    ></Pagination>
  );
}


export const Articles = ({ page, setPage, articles }: ArticlesProps) => {
  const router = useRouter()

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

  if (articles.data != null) {
    const pageCount = articles.meta.pagination.pageCount
    return (
      <Grid container direction="column" sx={{ flexGrow: 1 }} xs={12}>
        {/* @ts-ignore */}
        <Particles
          init={particlesInit}
          params={PaticleParams} />
        {isMobile ?
          <Grid container direction="column" sx={{ flexGrow: 1 }} spacing={2} m={2}>
            {articles?.data.map((article) => {
              return (
                <Grid xs={12} key={article.id}>
                  <Card>
                    <CardActionArea>
                      <Link href={`/article/${article.attributes?.uuid}`}>
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
                      <Button onClick={() => { router.push(`/article/${article.attributes?.uuid}`) }} size="small">
                        More Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
          :
          <Grid container direction="row" xs={10} sx={{ flexGrow: 1 }} spacing={2} m={2}>
            {articles?.data.map((article) => {
              return (
                <Grid container direction="column" key={article.id} xs={6} p={2}>
                  <Card>
                    <Link href={`/article/${article.attributes?.uuid}`}>
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
                      <Button onClick={() => { router.push(`/article/${article.attributes?.uuid}`) }} size="small">
                        More Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        }
        <Grid container direction="row" justifyContent="center" my={2}>
          <Content page={page} setPage={setPage} pageCount={pageCount}></Content>
        </Grid>
      </Grid>
    );
  } else {
    return null
  }
};
