import Link from "next/link";
import { ChangeEvent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import {
  Card,
  CardContent,
  Pagination,
  PaginationItem,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import Image from "next/image";
import {
  ArticleEntityResponseCollection,
} from "../../types/graphql_res";
import { useRouter } from "next/router";
import { useLocale } from "../../lib/locale";
import { DefaultAdsense } from "../Common/Adsense";

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
  //<img src={article.attributes.thumbnail.data.attributes.url} alt={article.attributes.thumbnail.data.attributes.alternativeText} width="50%" height="10%" />
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
                          {article.attributes.thumbnail?.data?.attributes?.url != null && article.attributes.thumbnail?.data?.attributes?.alternativeText != null ?
                            <Link href={`/article/${article.attributes.uuid}`}>
                              <Grid container justifyContent="center" mb={4} sx={{ position: "relative", flexGrow: 1 }}>
                                <Image src={article.attributes.thumbnail.data.attributes.url} className="nextimage" fill alt={article.attributes.thumbnail.data.attributes.alternativeText} />
                              </Grid>
                            </Link>
                            : null
                          }
                          <Grid container justifyContent="space-between" ml={1} alignContent="center" alignItems="center">
                            <Grid container sx={{ mt: { xs: 1, md: 0 } }} xs={12} md={6}>
                              <Typography variant="h4" color="text.primary">
                                {article.attributes.title}
                              </Typography>
                            </Grid>
                            <Grid container sx={{ mt: { xs: 1, md: 0 } }} xs={12} md={6} justifyContent="flex-end">
                              <Stack textAlign="right">
                                <Typography variant="caption">
                                  {t.updated_at}: {article.attributes.updatedAt
                                    .replace("T", " ")
                                    .replace(/\..*$/g, "")
                                    .replace(/\-/g, "/")}
                                </Typography>
                                <Typography variant="caption">
                                  {t.created_at}: {article.attributes.createdAt
                                    .replace("T", " ")
                                    .replace(/\..*$/g, "")
                                    .replace(/\-/g, "/")}
                                </Typography>
                              </Stack>
                            </Grid>
                          </Grid>
                          <Grid container justifyContent="flex-end" mt={1}>
                            {
                              article.attributes.category?.data?.attributes?.uuid != null ?
                                <Grid container sx={{ color: "text.link" }} spacing={1} ml={1}>
                                  <Grid>
                                    <FolderIcon sx={{ color: "text.secondary" }} />
                                  </Grid>
                                  <Grid>
                                    <Link href={{ pathname: `/category/${article.attributes.category.data.attributes.uuid}`, query: { name: article.attributes.category.data.attributes.name } }} >
                                      <Typography color="text.link">
                                        {article.attributes.category.data.attributes.name}
                                      </Typography>
                                    </Link>
                                  </Grid>
                                </Grid>
                                : null
                            }
                          </Grid>
                          <Grid container direction="column" sx={{ flexGrow: 1 }} ml={3}>
                            <Typography variant="body1">{article.attributes.summary}</Typography>
                          </Grid>
                        </CardContent>
                        <Grid container ml={2} my={1}>
                          <CardActions sx={{ flexGrow: 1 }}>
                            <Grid>
                              <Button onClick={() => { router.push("/article/[uuid]", `/article/${article.attributes?.uuid}`) }} size="small">
                                <Typography variant="subtitle1" color="text.link">
                                  {t.more_details}
                                </Typography>
                              </Button>
                            </Grid>
                          </CardActions>
                        </Grid>
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
        <Grid my={2}>
          <DefaultAdsense/>
        </Grid>
      </Grid >
    );
  } else {
    return null
  }
};
