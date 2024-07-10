import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { request } from "graphql-request";
import useSWR from "swr";
import { useLocale } from "../lib/locale";
import type { NextPage } from "next";
import Sidebar from "../components/Common/Sidebar";
import { getCategoriesAndTags } from "../graphql/getCategoriesAndTags";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import {
  CategoryEntityResponseCollection,
  GetCategoriesAndTagsQuery,
  TagEntityResponseCollection,
} from "../types/graphql_res";
import { CategoriesAndTagsResponseProps } from "../types/general";
import { GraphqlError } from "../components/Common/DisplayError";
import Meta from "../components/Common/Meta";

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

const PrivacyPolicyContent = () => {
  const { locale, t } = useLocale();
  const typo = (text: string) =>
    text.split("\n").map((line, key) => (
      <Typography key={key} variant="body1" color="text.secondary">
        {line}
      </Typography>
    ));
  const site_info = typo(t.site_text);

  const google_ad_url = `https://support.google.com/adspolicy/answer/54818?hl=${locale}`;
  const google_ad_info = typo(t.google_ad_text);
  const google_analysis_info = typo(t.google_analysis_text);
  const google_analysis_url = `https://marketingplatform.google.com/about/analytics/terms/${locale === "ja" ? "jp" : "us"}/`;

  const copy_right_info = typo(t.copy_right_text);
  const link_free_info = typo(t.link_free_text);
  const disclaimer_info = typo(t.disclaimer_text);

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
      <Stack spacing={3} sx={{ my: { xs: 2 } }}>
        <Typography color="text.primary" variant="h5">
          {t.privacy_policy}
        </Typography>
        <Typography color="text.primary" variant="h6">
          {t.site_info}
        </Typography>
        <Grid ml={2}>{site_info}</Grid>
        <Typography color="text.primary" variant="h6">
          {t.google_ad}
        </Typography>
        <Grid ml={2}>
          {google_ad_info}
          <Link href={google_ad_url} color="text.link">
            {google_ad_url}
          </Link>
        </Grid>
        <Typography color="text.primary" variant="h6">
          {t.google_analysis}
        </Typography>
        <Grid ml={2}>
          {google_analysis_info}
          <Link href={google_analysis_url} color="text.link">
            {google_analysis_url}
          </Link>
        </Grid>
        <Typography color="text.primary" variant="h6">
          {t.copy_right}
        </Typography>
        <Grid ml={2}>{copy_right_info}</Grid>
        <Typography color="text.primary" variant="h6">
          {t.link_free}
        </Typography>
        <Grid ml={2}>{link_free_info}</Grid>
        <Typography color="text.primary" variant="h6">
          {t.disclaimer}
        </Typography>
        <Grid ml={2}>{disclaimer_info}</Grid>
      </Stack>
    </Grid>
  );
};

const PrivacyPolicy: NextPage<CategoriesAndTagsResponseProps> = ({
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
          title="Privacy Policy Page"
          description="This page published about privacy policy."
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container xs={12} md={10} sx={{ flexGrow: 1, py: { sm: 3 } }}>
            <PrivacyPolicyContent />
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

export default PrivacyPolicy;
