import { request } from "graphql-request";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import useSWR from "swr";
import { useRouter } from "next/router";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import { getCategories } from "../graphql/getCategories";
import { CategoryEntity, CategoryEntityResponseCollection } from "../types/graphql_res";
import { GraphqlError } from "../components/Common/DisplayError";
import { CategoriesResponseProps } from "../types/general";
import { useLocale } from "../lib/locale";
import Sidebar from "../components/Common/Sidebar";
import Meta from "../components/utils/Head";

export const getStaticProps = (async ({
  locale,
}) => {
  const variables = { filters: {}, pagination: {}, locale: locale };
  const result = await request<{ categories: CategoryEntityResponseCollection }>(
    getBackendGraphqlURL(),
    getCategories,
    variables
  ).then(({ categories }: { categories: CategoryEntityResponseCollection }) => {
    return {
      props: {
        categories: categories,
        variables: variables,
      },
      notFound: false,
      revalidate: 3600,
    };
  });
  if (result != null) {
    return result;
  } else {
    return {
      notFound: true,
      revalidate: 3600,
    };
  }
})

const AchievementContent = () => {
  const { locale, locales, t } = useLocale();
  const about_portfolios = t.portfolios_text.map((value, index, array) => (
    <Grid key={index}>
      <Typography variant="h5" color="text.primary">
        {value.title}
      </Typography>
      <Grid my={2} ml={2}>
        <Typography variant="body1" color="text.secondary">
          {value.date}
        </Typography>
      </Grid>
      <Grid my={2} ml={2}>
        {value.description.split("\n").map((line, key) => (
          <Typography key={key} variant="body1" color="text.secondary">
            {line}
          </Typography>
        ))}
      </Grid>
      <Grid my={2} ml={2}>
        {value.url != "" && (
          <Typography variant="subtitle2" color="text.secondary">
            URL:{" "}
            <Link href={value.url} color="text.link">
              {value.url}
            </Link>
          </Typography>
        )}
      </Grid>
      <Grid my={2} ml={2}>
        {value.github != "" && (
          <Typography variant="subtitle2" color="text.secondary">
            GitHub:{" "}
            <Link href={value.github} color="text.link">
              {value.github}
            </Link>
          </Typography>
        )}
      </Grid>
    </Grid>
  ));
  const about_achivement = t.achievement_text.map((value, index, array) => (
    <Grid key={index}>
      <Typography variant="h5" color="text.primary">
        {value.title}
      </Typography>
      <Grid my={2} ml={2}>
        <Typography variant="body1" color="text.secondary">
          {value.date}
        </Typography>
      </Grid>
      <Grid my={2} ml={2}>
        {value.description.split("\n").map((line, key) => (
          <Typography key={key} variant="body1" color="text.secondary">
            {line}
          </Typography>
        ))}
      </Grid>
    </Grid >
  ));
  const about_instance = (
    <Grid spacing={2}>
      {t.about_instance.split("\n").map((line, key) => (
        <Typography key={key} variant="h6" color="text.primary">
          {line}
        </Typography>
      ))}
    </Grid>
  );

  return (
    <Grid
      container
      direction="column"
      xs={12}
      mx={5}
      px={5}
      spacing={3}
      sx={{
        backgroundColor: "background.content",
        my: { md: 0, xs: 2 },
        flexGrow: 1,
      }}
    >
      <Grid>
        <Grid>
          <Typography color="text.primary" variant="h4">
            {t.achievement}
          </Typography>
        </Grid>
      </Grid>
      <Grid>{about_achivement}</Grid>
      <Grid>
        <Grid>
          <Typography color="text.primary" variant="h4">
            {t.portfolios}
          </Typography>
        </Grid>
      </Grid>
      <Grid >{about_portfolios}</Grid>
    </Grid>
  );
};

const Achievement: NextPage<CategoriesResponseProps> = ({
  categories,
  variables,
}) => {
  
  const { data, error } = useSWR([getCategories, variables], {
    fallbackData: { categories: categories, variables: variables },
  });
  if (data != null) {
    return (
      <Grid container sx={{ flexGrow: 1 }}>
        <Meta
          title="Portfolios Page"
          description="This page introduce my portfolios."
          keyword={categories.data
            .map(
              (value: CategoryEntity) =>
                value.attributes?.name as string
            )
            .join(" ")}
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container py={2} xs={12} md={10} sx={{ flexGrow: 1 }}>
            <AchievementContent />
          </Grid>
          <Grid container xs={12} md={2} sx={{ flexGrow: 1 }}>
            <Sidebar categories={data.categories} />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <GraphqlError error={error} />;
  }
};

export default Achievement;
