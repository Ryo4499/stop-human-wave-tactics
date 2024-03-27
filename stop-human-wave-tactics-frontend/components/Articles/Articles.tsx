import { ChangeEvent, useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Pagination from "@mui/material/Pagination"
import PaginationItem from "@mui/material/PaginationItem"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import { ArticleEntityResponseCollection } from "../../types/graphql_res";
import { useRouter } from "next/router";
import { useLocale } from "../../lib/locale";
import { imageLoader } from "../../lib/loader";
import { Adsense } from "../Common/Adsense";
import { PageContext } from "../../pages/_app";
import { CategoryLinkComponent } from "../Categories/Categories";
import { TagsLinkComponent } from "../Tags/Tags";

interface ArticlesProps {
  articles: ArticleEntityResponseCollection;
  filter: string
}

interface ArticlesPropsContent {
  pageCount: number | undefined;
}

const Content = ({ pageCount }: ArticlesPropsContent) => {
  const router = useRouter();
  const { page, setPage } = useContext(PageContext)
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    router.push("/articles/[page]", `/articles/${value}`);
  }
  return (
    <Pagination
      page={page}
      count={pageCount}
      onChange={handleChange}
      renderItem={(item) => {
        return <PaginationItem {...item} />;
      }}
    />
  );
};

const FilterComponent = ({ filter }) => {
  return filter !== "" ?
    (<Grid container xs={12} ml={2} my={2}>
      <Typography variant="h6" color="text.secondary">
        {filter}
      </Typography>
    </Grid>) : null
}

const ImageComponent = ({ article }) => {
  if (article.attributes.thumbnail?.data?.attributes
    ?.url == null ||
    article.attributes.thumbnail?.data?.attributes
      ?.alternativeText == null) {
    return null
  }
  return (
    <Link href={`/article/${article.attributes.uuid}`}>
      <Grid
        container
        xs={12}
        mx={1}
        mb={4}
      >
        <Image
          loader={imageLoader}
          src={
            article.attributes.thumbnail.data.attributes.url
          }
          className="nextimage"
          fill
          alt={
            article.attributes.thumbnail.data.attributes
              .alternativeText
          }
          unoptimized
          sizes="(max-width: 1080px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
      </Grid>
    </Link>
  )
}

export const Articles = ({
  articles,
  filter,
}: ArticlesProps) => {

  const { t } = useLocale();
  const router = useRouter();

  if (articles.data != null) {
    const pageCount = articles.meta.pagination.pageCount;
    return (
      <Grid container xs={12} alignContent="flex-start">
        <FilterComponent filter={filter} />
        <Grid
          container
          direction="row"
          xs={12}
          sx={{ flexGrow: 1 }}
          spacing={0.2}
          mb={2}
        >
          {articles?.data.map((article) => {
            if (article.attributes?.uuid != null) {
              return (
                <Grid
                  container
                  direction="column"
                  sx={{ flexGrow: 1 }}
                  key={article.attributes?.uuid}
                  xs={12}
                  md={6}
                  p={3}
                >
                  <Card
                    sx={{
                      display: "flex",
                      height: "100%",
                      backgroundColor: "background.content",
                    }}
                  >
                    <Stack sx={{
                      flexGrow: 1,
                    }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <ImageComponent article={article} />
                        <Grid
                          xs={12}
                          my={1}
                          px={1}
                        >
                          <Typography sx={{ fontSize: "1.5rem" }} color="text.primary">
                            {article.attributes.title}
                          </Typography>
                        </Grid>
                        <Grid
                          xs={12}
                          my={2}
                          justifyContent="flex-end"
                        >
                          <Stack textAlign="right" color="text.secondary">
                            <Typography sx={{ fontSize: "0.8rem" }}>
                              {t.updated_at}:{" "}
                              {article.attributes.updatedAt}
                            </Typography>
                            <Typography sx={{ fontSize: "0.8rem" }} color="text.secondary">
                              {t.created_at}:{" "}
                              {article.attributes.createdAt}
                            </Typography>
                          </Stack>
                        </Grid>
                        <CategoryLinkComponent article={article.attributes} />
                        <TagsLinkComponent article={article.attributes} />
                        <Grid
                          container
                          px={2}
                        >
                          <Typography sx={{ fontSize: "1.0rem" }} color="text.secondary">
                            {article.attributes.summary}
                          </Typography>
                        </Grid>
                      </CardContent>
                      <Grid xs={12} ml={2} mt={1} mb={2}>
                        <CardActions>
                          <Grid>
                            <Button
                              onClick={() => {
                                router.push({
                                  pathname: "/article/[uuid]",
                                  query: { uuid: article.attributes?.uuid }
                                });
                              }}
                              size="small"
                            >
                              <Typography
                                variant="subtitle1"
                                color="text.link"
                              >
                                {t.more_details}
                              </Typography>
                            </Button>
                          </Grid>
                        </CardActions>
                      </Grid>
                    </Stack>
                  </Card>
                </Grid>
              );
            } else {
              return null;
            }
          })}
        </Grid>
        <Grid container xs={12} justifyContent="center" sx={{ height: "3rem" }}>
          <Content
            pageCount={pageCount}
          ></Content>
        </Grid>
        {
          <Adsense style={{ display: "block", width: "80vw", height: "40vh" }} format="autorelaxed" slot="1094459397" fullWidth="true" adStatus="filled" />
        }
      </Grid>
    );
  } else {
    return null;
  }
};
