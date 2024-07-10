import { request } from "graphql-request";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import type { NextPage } from "next";
import useSWR from "swr";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import {
  CategoryEntityResponseCollection,
  GetCategoriesAndTagsQuery,
  TagEntityResponseCollection,
} from "../types/graphql_res";
import { CategoriesAndTagsResponseProps } from "../types/general";
import { GraphqlError } from "../components/Common/DisplayError";
import { useLocale } from "../lib/locale";
import Sidebar from "../components/Common/Sidebar";
import Meta from "../components/Common/Meta";
import { getCategoriesAndTags } from "../graphql/getCategoriesAndTags";

export const getStaticProps = async ({ locale }) => {
  const variables = {
    categoryFilters: {},
    tagFilters: {},
    categoryPagination: {},
    tagPagination: {},
    categorySort: [],
    tagSort: [],
    locale: locale,
  };
  const result = await request<{
    categories: CategoryEntityResponseCollection;
    tags: TagEntityResponseCollection;
  }>(getBackendGraphqlURL(), getCategoriesAndTags, variables).then(
    (res: GetCategoriesAndTagsQuery) => {
      if (res.categories == null && res.tags == null) {
        return {
          props: {
            categories: null,
            tags: null,
            variables: variables,
          },
          notFound: true,
          revalidate: 3600,
        };
      } else {
        return {
          props: {
            categories: res.categories,
            tags: res.tags,
            variables: variables,
          },
          notFound: false,
          revalidate: 3600,
        };
      }
    },
  );
  return result;
};

const AchievementContent = () => {
  const { t } = useLocale();
  const about_portfolios = t.portfolios_text.map((value, index, array) => (
    <Grid key={index}>
      <Typography variant="h6" color="text.primary" my={2}>
        {value.title}
      </Typography>
      <Stack spacing={2} ml={2}>
        <Typography variant="body1" color="text.secondary">
          {value.date}
        </Typography>
        {value.description.split("\n").map((line, key) => (
          <Typography key={key} variant="body1" color="text.secondary">
            {line}
          </Typography>
        ))}
        <Typography variant="body1" color="text.secondary">
          {t.technology_stack}:{" " + value.skill}
        </Typography>
        {value.url != "" && (
          <Typography variant="body1" color="text.secondary">
            URL:{" "}
            <Link href={value.url} color="text.link">
              {value.url}
            </Link>
          </Typography>
        )}
        {value.github != "" && (
          <Typography variant="body1" color="text.secondary">
            GitHub:{" "}
            <Link href={value.github} color="text.link">
              {value.github}
            </Link>
          </Typography>
        )}
      </Stack>
    </Grid>
  ));
  const about_achivement = t.achievement_text.map((value, index, array) => (
    <Grid key={index}>
      <Typography variant="h6" color="text.primary" my={2}>
        {value.title}
      </Typography>
      <Stack spacing={3} ml={2}>
        <Typography variant="body1" color="text.secondary">
          {value.date}
        </Typography>
        {value.description.split("\n").map((line, key) => (
          <Typography key={key} variant="body1" color="text.secondary">
            {line}
          </Typography>
        ))}
        <Typography variant="body1" color="text.secondary">
          {t.technology_stack}:{" " + value.skill}
        </Typography>
      </Stack>
    </Grid>
  ));
  const about_instance = (
    <Stack spacing={2}>
      {t.about_instance.split("\n").map((line, key) => (
        <Typography key={key} variant="h6" color="text.primary">
          {line}
        </Typography>
      ))}
    </Stack>
  );

  return (
    <Grid
      container
      direction="column"
      xs={12}
      sx={{
        backgroundColor: "background.content",
        px: { xs: 1, sm: 3 },
        mx: { xs: 1, sm: 3 },
        py: { xs: 1, sm: 1 },
        my: { xs: 2, md: 0 },
        flexGrow: 1,
      }}
    >
      <Grid sx={{ my: { xs: 2 } }}>
        <Typography color="text.primary" variant="h5">
          {t.achievement}
        </Typography>
        {about_achivement}
      </Grid>
      <Divider sx={{ my: 5 }} />
      <Grid>
        <Typography color="text.primary" variant="h5">
          {t.portfolios}
        </Typography>
        {about_portfolios}
      </Grid>
    </Grid>
  );
};

const Achievement: NextPage<CategoriesAndTagsResponseProps> = ({
  categories,
  tags,
  variables,
}) => {
  const { data, error } = useSWR([getCategoriesAndTags, variables], {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.status === 404) return;
      // Only retry up to 10 times.
      if (retryCount >= 10) return;
      // Retry after 3 seconds.
      setTimeout(() => revalidate({ retryCount }), 3000);
    },
    fallbackData: { categories: categories, tags: tags, variables: variables },
  });
  if (data != null) {
    return (
      <Grid container sx={{ flexGrow: 1 }}>
        <Meta
          title="Portfolios Page"
          description="This page introduce my portfolios."
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container xs={12} md={10} sx={{ flexGrow: 1, py: { sm: 3 } }}>
            <AchievementContent />
          </Grid>
          <Grid container xs={12} md={2} sx={{ flexGrow: 1 }}>
            <Sidebar categories={data.categories} tags={data.tags} />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <GraphqlError error={error} />;
  }
};

export default Achievement;
