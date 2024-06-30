import { ChangeEvent, useContext, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Typography from "@mui/material/Typography";
import UpdateIcon from "@mui/icons-material/Update";
import CreateIcon from "@mui/icons-material/Create";
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
import { adsenseEnabled } from "../../lib/google";

interface ArticlesProps {
  articles: ArticleEntityResponseCollection;
  filter: string;
}

interface ArticlesPropsContent {
  pageCount: number | undefined;
}

const Content = ({ pageCount }: ArticlesPropsContent) => {
  const router = useRouter();
  const { page, setPage } = useContext(PageContext);
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
        return <PaginationItem {...item} />;
      }}
    />
  );
};

const FilterComponent = ({ filter }) => {
  return filter !== "" ? (
    <Grid container xs={12} my={2} pl={4} py={1}>
      <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 600 }}>
        {filter}
      </Typography>
    </Grid>
  ) : null;
};

const ImageComponent = ({ article }) => {
  if (
    article.attributes.thumbnail?.data?.attributes?.url == null ||
    article.attributes.thumbnail?.data?.attributes?.alternativeText == null
  ) {
    return null;
  }
  return (
    <Grid container justifyContent="center" minHeight="25vh" xs={12}>
      <Link href={`/article/${article.attributes.uuid}`}>
        <Image
          loader={imageLoader}
          src={article.attributes.thumbnail.data.attributes.url}
          className="nextimage"
          fill
          alt={article.attributes.thumbnail.data.attributes.alternativeText}
          unoptimized
          sizes="(max-width: 1080px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
      </Link>
    </Grid>
  );
};

export const Articles = ({ articles, filter }: ArticlesProps) => {
  const { t } = useLocale();
  const router = useRouter();
  const [hoverBtnNum, setHoverBtnNum] = useState(-1);
  const [pressedBtnNum, setPressedBtnNum] = useState(-1);

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
          {articles?.data.map((article, i) => {
            if (article.attributes?.uuid != null) {
              return (
                <Grid
                  container
                  direction="column"
                  sx={{ flexGrow: 1 }}
                  key={article.attributes?.uuid}
                  xs={12}
                  sm={6}
                  xl={4}
                  p={3}
                >
                  <Card
                    sx={{
                      display: "flex",
                      height: "100%",
                      backgroundColor: "background.content",
                    }}
                  >
                    <Stack
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <ImageComponent article={article} />
                        <Grid xs={12} my={1} px={1}>
                          <Typography
                            sx={{ fontSize: "1.5rem" }}
                            color="text.primary"
                          >
                            {article.attributes.title}
                          </Typography>
                        </Grid>
                        <CategoryLinkComponent article={article.attributes} />
                        <TagsLinkComponent article={article.attributes} />
                        <Grid container px={2}>
                          <Typography
                            sx={{ fontSize: "1.0rem" }}
                            color="text.secondary"
                          >
                            {article.attributes.summary}
                          </Typography>
                        </Grid>
                      </CardContent>
                      <Stack
                        direction="row"
                        m={2}
                        mb={2}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <CardActions>
                          <Button
                            onClick={() => {
                              router.push({
                                pathname: "/article/[uuid]",
                                query: { uuid: article.attributes?.uuid },
                              });
                            }}
                            onPointerOver={() => setHoverBtnNum(i)}
                            onPointerOut={() => setHoverBtnNum(-1)}
                            onMouseDown={() => setPressedBtnNum(i)}
                            onMouseUp={() => setPressedBtnNum(-1)}
                            size="small"
                            sx={{
                              backgroundColor: "background.button",
                            }}
                            className={`
                                  ${pressedBtnNum === i ? "transform scale-95" : ""}
                                  ${hoverBtnNum === i ? "rainbow-shadow" : ""}
                                `}
                          >
                            <Typography
                              sx={{ fontSize: "1.8vh" }}
                              color="text.link"
                              m={1}
                            >
                              {t.more_details}
                            </Typography>
                          </Button>
                        </CardActions>
                        <Stack
                          direction="column"
                          sx={{ color: "text.secondary" }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="anchor-center"
                          >
                            <UpdateIcon />
                            <Typography sx={{ fontSize: "0.8rem" }} ml={0.8}>
                              {article.attributes.updatedAt}
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="anchor-center"
                          >
                            <CreateIcon />
                            <Typography sx={{ fontSize: "0.8rem" }} ml={0.8}>
                              {article.attributes.createdAt}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
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
          <Content pageCount={pageCount}></Content>
        </Grid>
        {adsenseEnabled() && (
          <Adsense
            style={{ display: "block", width: "80vw", height: "40vh" }}
            format="autorelaxed"
            slot="1094459397"
            fullWidth="true"
            adStatus="filled"
          />
        )}
      </Grid>
    );
  } else {
    return null;
  }
};
