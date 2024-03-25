import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { request } from "graphql-request";
import useSWR from "swr";
import { useLocale } from "../lib/locale";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { NextPage } from "next";
import Sidebar from "../components/Common/Sidebar";
import { getCategories } from "../graphql/getCategories";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import { CategoryEntityResponseCollection, GetCategoriesQuery } from "../types/graphql_res";
import { GraphqlError } from "../components/Common/DisplayError";
import { CategoriesResponseProps } from "../types/general";
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


const PrivacyPolicyContent: NextPage = () => {
  const { locale, locales, t } = useLocale();
  const typo = (text: string) =>
    text.split("\n").map((line, key) => (
      <Typography key={key} variant="body1" color="text.secondary">
        {line}
      </Typography>
    ));
  const site_info = typo(t.site_text);

  const google_ad_url =
    `https://support.google.com/adspolicy/answer/54818?hl=${locale}`;
  const google_ad_info = typo(t.google_ad_text);
  const google_analysis_info = typo(t.google_analysis_text);
  const google_analysis_url =
    `https://marketingplatform.google.com/about/analytics/terms/${locale === 'ja' ? 'jp' : 'us'}/`;

  const copy_right_info = typo(t.copy_right_text);
  const link_free_info = typo(t.link_free_text);
  const disclaimer_info = typo(t.disclaimer_text);

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
            {t.privacy_policy}
          </Typography>
        </Grid>
        <Grid my={2}>
          <Typography color="text.primary" variant="h5">
            {t.site_info}
          </Typography>
          <Grid my={2} ml={2}>{site_info}</Grid>
        </Grid>
        <Grid my={2}>
          <Typography color="text.primary" variant="h5">
            {t.google_ad}
          </Typography>
          <Grid my={2} ml={2}>
            {google_ad_info}
            <Link href={google_ad_url} color="text.link">
              {google_ad_url}
            </Link>
          </Grid>
        </Grid>
        <Grid my={2}>
          <Typography color="text.primary" variant="h5">
            {t.google_analysis}
          </Typography>
          <Grid my={2} ml={2}>
            {google_analysis_info}
            <Link href={google_analysis_url} color="text.link">
              {google_analysis_url}
            </Link>
          </Grid>
        </Grid>
        <Grid my={2}>
          <Typography color="text.primary" variant="h5">
            {t.copy_right}
          </Typography>
          <Grid my={2} ml={2}>{copy_right_info}</Grid>
        </Grid>
        <Grid my={2}>
          <Typography color="text.primary" variant="h5">
            {t.link_free}
          </Typography>
          <Grid my={2} ml={2}>{link_free_info}</Grid>
        </Grid>
        <Grid my={2}>
          <Typography color="text.primary" variant="h5">
            {t.disclaimer}
          </Typography>
          <Grid my={2} ml={2}>{disclaimer_info}</Grid></Grid>
      </Grid>
    </Grid>
  );
};

const PrivacyPolicy: NextPage<CategoriesResponseProps> = ({
  categories,
  variables,
}) => {

  const { data, error } = useSWR([getCategories, variables], {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.status === 404) return
      // Only retry up to 10 times.
      if (retryCount >= 10) return
      // Retry after 3 seconds.
      setTimeout(() => revalidate({ retryCount }), 3000)
    },
    fallbackData: { categories: categories, variables: variables },
  });
  const router = useRouter()
  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        return false
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);
  if (data != null) {
    return (
      <Grid container sx={{ flexGrow: 1 }}>
        <Meta
          title="Privacy Policy Page"
          description="This page published about privacy policy."
          keyword={data.categories.data
            .map((value) => value.attributes?.name)
            .join(" ")}
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container py={2} xs={12} md={10} sx={{ flexGrow: 1 }}>
            <PrivacyPolicyContent />
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

export default PrivacyPolicy;
