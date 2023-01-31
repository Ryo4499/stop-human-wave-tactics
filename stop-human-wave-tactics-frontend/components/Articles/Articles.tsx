import Link from "next/link";
import { useLayoutEffect, ChangeEvent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import {
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
  ArticleEntityResponseCollection,
} from "../../types/apollo_client";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect"
import { useLocale } from "../../lib/locale";

interface ArticlesProps {
  page: number
  setPage: (value: number) => void
  articles: ArticleEntityResponseCollection
};

interface ArticlesPropsContent {
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
  const { locale, locales, t } = useLocale()
  const router = useRouter()

  useLayoutEffect(() => {
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
        {isMobile ?
          <Grid container direction="column" sx={{ flexGrow: 1 }} spacing={2} m={2}>
            {articles?.data.map((article) => {
              if (article.attributes?.uuid != null) {
                return (
                  <Grid xs={12} key={article.id}>
                    <Card>
                      <CardActionArea>
                        <CardContent>
                          <Grid container justifyContent="center" mb={4}>
                            {article.attributes.thumbnail?.data?.attributes?.url != null ?
                              <Link href={`/article/${article.attributes.uuid}`}>
                                <CardMedia
                                  component="img"
                                  image={
                                    article.attributes.thumbnail.data.attributes.url
                                  }
                                />
                              </Link>
                              : null
                            }
                          </Grid>
                          <Grid container direction="row" justifyContent="space-between" my={2} sx={{ flexGrow: 1 }}>
                            <Grid>
                              <Typography variant="h4" >
                                {article.attributes.title}
                              </Typography>
                            </Grid>
                            <Stack sx={{ color: "text.secondary" }}>
                              <Typography variant="caption" align="right">
                                {t.updated_at}: {article.attributes.updatedAt
                                  .replace("T", " ")
                                  .replace(/\..*$/g, "")
                                  .replace(/\-/g, "/")}
                              </Typography>
                              <Typography variant="caption" align="right">
                                {t.created_at}: {article.attributes.createdAt
                                  .replace("T", " ")
                                  .replace(/\..*$/g, "")
                                  .replace(/\-/g, "/")}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid container direction="column" sx={{ flexGrow: 1 }} mt={4} ml={1}>
                            <Typography variant="body1">{article.attributes.summary}</Typography>
                          </Grid>
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
              } else {
                return null
              }
            })}
          </Grid>
          :
          <Grid container direction="row" xs={12} sx={{ flexGrow: 1 }} spacing={0.2}>
            <Grid container xs={6} sx={{ flexGrow: 1 }}>
              {articles?.data.map((article) => {
                if (article.attributes?.uuid != null) {
                  return (
                    <Grid container direction="column" sx={{ flexGrow: 1 }} key={article.id} xs={6} p={2}>
                      <Card sx={{ display: "flex", justifyContent: "stretch", alignContent: "stretch" }}>
                        <Stack sx={{ flexGrow: 1 }}>
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Grid container justifyContent="center" mb={4}>
                              {article.attributes.thumbnail?.data?.attributes?.url != null ?
                                <Link href={`/article/${article.attributes.uuid}`}>
                                  <CardMedia
                                    component="img"
                                    image={
                                      article.attributes.thumbnail.data.attributes.url
                                    }
                                  />
                                </Link>
                                : null
                              }
                            </Grid>
                            <Grid container direction="row" justifyContent="space-between" my={2} sx={{ flexGrow: 1 }}>
                              <Grid>
                                <Typography variant="h4" >
                                  {article.attributes.title}
                                </Typography>
                              </Grid>
                              <Stack sx={{ color: "text.secondary" }}>
                                <Typography variant="caption" align="right">
                                  {t.updated_at}: {article.attributes.updatedAt
                                    .replace("T", " ")
                                    .replace(/\..*$/g, "")
                                    .replace(/\-/g, "/")}
                                </Typography>
                                <Typography variant="caption" align="right">
                                  {t.created_at}: {article.attributes.createdAt
                                    .replace("T", " ")
                                    .replace(/\..*$/g, "")
                                    .replace(/\-/g, "/")}
                                </Typography>
                              </Stack>
                            </Grid>
                            <Grid container direction="column" sx={{ flexGrow: 1 }} mt={4} ml={1}>
                              <Typography variant="body1">{article.attributes.summary}</Typography>
                            </Grid>
                          </CardContent>
                          <CardActions sx={{ flexGrow: 1 }}>
                            <Grid container mb={2} ml={1}>
                              <Button onClick={() => { router.push(`/article/${article.attributes?.uuid}`) }} size="small">
                                More Details
                              </Button>
                            </Grid>
                          </CardActions>
                        </Stack>
                      </Card>
                    </Grid>
                  )
                } else {
                  return null
                }
              })}
            </Grid>
          </Grid>
        }
        {router.pathname === "/search" ?
          null :
          <Grid container direction="row" justifyContent="center" mb={2}>
            <Content page={page} setPage={setPage} pageCount={pageCount}></Content>
          </Grid>
        }
      </Grid>
    );
  } else {
    return null
  }
};
