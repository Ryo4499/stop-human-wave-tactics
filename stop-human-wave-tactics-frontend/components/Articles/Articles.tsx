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
  Container,
} from "@mui/material";
import ArchiveIcon from '@mui/icons-material/Archive';
import Image from "next/image";
import {
  ArticleEntityResponseCollection,
} from "../../types/graphql_res";
import { useRouter } from "next/router";
import { useLocale } from "../../lib/locale";

interface ArticlesProps {
  page: number
  setPage: (value: number) => void
  articles: ArticleEntityResponseCollection
  filter: string | string[] | null | undefined
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
    router.push("/articles/[page]", `/articles/${value}`);
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


export const Articles = ({ page, setPage, articles, filter }: ArticlesProps) => {
  const { locale, locales, t } = useLocale()
  const router = useRouter()

  if (articles.data != null) {
    const pageCount = articles.meta.pagination.pageCount
    return (
      <Grid container direction="column" sx={{ flexGrow: 1 }} xs={12}>
        {
          filter != null ?
            <Grid container xs={12} mx={3} mt={2} mb={1}>
              <Typography variant="h6" color="text.secondary">{t.keyword + ":  " + filter}</Typography>
            </Grid>
            : null
        }
        <Grid container direction="row" xs={12} sx={{ flexGrow: 1 }} spacing={0.2}>
          <Grid container xs={6} sx={{ flexGrow: 1 }}>
            {articles?.data.map((article) => {
              if (article.attributes?.uuid != null) {
                return (
                  <Grid container direction="column" sx={{ flexGrow: 1 }} key={article.id} xs={12} md={6} p={2}>
                    <Card sx={{ display: "flex", justifyContent: "stretch", alignContent: "stretch", backgroundColor: "background.content" }}>
                      <Stack sx={{ flexGrow: 1 }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Grid container justifyContent="center" mb={4} sx={{ position: "relative", flexGrow: 1 }}>
                            {article.attributes.thumbnail?.data?.attributes?.url != null && article.attributes.thumbnail?.data?.attributes?.alternativeText != null ?
                              <Link href={`/article/${article.attributes.uuid}`} as="/article/[uuid]">
                                <Image src={article.attributes.thumbnail.data.attributes.url} className="nextimage" fill alt={article.attributes.thumbnail.data.attributes.alternativeText} />
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
                          {
                            article.attributes.category?.data?.attributes?.uuid != null ?
                              <Grid container sx={{ color: "text.link" }} spacing={1}>
                                <Grid>
                                  <ArchiveIcon sx={{ color: "text.secondary" }} />
                                </Grid>
                                <Grid>
                                  <Link href={{ pathname: `/category/${article.attributes.category.data.attributes.uuid}`, query: { name: article.attributes.category.data.attributes.name } }} >
                                    {article.attributes.category.data.attributes.name}
                                  </Link>
                                </Grid>
                              </Grid>
                              : null
                          }
                          <Grid container direction="column" sx={{ flexGrow: 1 }} mt={4} ml={1}>
                            <Typography variant="body1">{article.attributes.summary}</Typography>
                          </Grid>
                        </CardContent>
                        <CardActions sx={{ flexGrow: 1 }}>
                          <Grid container mb={2} ml={1}>
                            <Grid>
                              <Button onClick={() => { router.push("/article/[uuid]", `/article/${article.attributes?.uuid}`) }} size="small">
                                <Typography variant="subtitle1" color="text.link">
                                  {t.more_details}
                                </Typography>
                              </Button>
                            </Grid>
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
        {
          router.pathname === "/search" ?
            null :
            <Grid container direction="row" justifyContent="center" mb={2}>
              <Content page={page} setPage={setPage} pageCount={pageCount}></Content>
            </Grid>
        }
      </Grid >
    );
  } else {
    return null
  }
};
