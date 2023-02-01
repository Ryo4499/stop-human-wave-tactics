import { Box, Typography, ListItemText, Link } from "@mui/material";
import { request } from "graphql-request"
import Grid from "@mui/material/Unstable_Grid2";
import { useLocale } from "../lib/locale"
import type { NextPage } from "next";
import Sidebar from "../components/Common/Sidebar";
import { isMobile } from "react-device-detect";
import { getCategories } from "../graphql/getCategories";
import { getBackendURL } from "../lib/graphqlClient";
import { CategoryEntityResponseCollection } from "../types/apollo_client";
import { GraphqlError } from "../components/Common/DisplayError";
import { CategoriesResponseProps, IStaticProps } from "../types/general";
import Loading from "../components/Common/Loading";
import useSWR from "swr"

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
  const variables = { pagination: {}, locale: locale }
  const result = await request(getBackendURL(), getCategories, variables).then(({ categories }: { categories: CategoryEntityResponseCollection }) => {
    return {
      props: {
        categories: categories,
        variables: variables
      },
      notFound: false,
      revalidate: 3600,
    };
  })
  if (result != null) {
    return result
  } else {
    return {
      notFound: true,
      revalidate: 3600
    }
  }
};

const PrivacyPolicyContent: NextPage = () => {
  const { locale, locales, t } = useLocale();
  const site_text = t.site_text
  const site_info = site_text.split("\n").map((line, key) => (
    <span key={key}>
      {line}
      <br />
    </span>
  ));

  const google_ad_url =
    "https://support.google.com/adspolicy/answer/54818?hl=ja";
  const google_ad_info = t.google_ad_text.split("\n").map((line, key) => (
    <span key={key}>
      {line}
      <br />
    </span>
  ));

  const google_analysis_info = t.google_analysis_text
    .split("\n")
    .map((line, key) => (
      <span key={key}>
        {line}
        <br />
      </span>
    ));
  const google_analysis_url =
    "https://marketingplatform.google.com/about/analytics/terms/jp/";

  const copy_right_info = t.copy_right_text.split("\n").map((line, key) => (
    <span key={key}>
      {line}
      <br />
    </span>
  ));

  const link_free_info = t.link_free_text.split("\n").map((line, key) => (
    <span key={key}>
      {line}
      <br />
    </span>
  ));

  const disclaimer_info = t.disclaimer_text.split("\n").map((line, key) => (
    <span key={key}>
      {line}
      <br />
    </span>
  ));

  return (
    <Grid container direction="column" py={2} px={4} spacing={3}>
      <Grid>
        <Typography color="text.primary" variant="h6">{t.site_info}</Typography>
      </Grid>
      <Grid>
        <Typography color="text.secondary" variant="body1">{site_info}</Typography>
      </Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">{t.google_ad}</Typography>
      </Grid>
      <Grid>
        <Typography color="text.secondary" variant="body1">{google_ad_info}</Typography>
        <Link href={google_ad_url} color="text.link">
          <a target="_blank" rel="noopener noreferrer">{google_ad_url}</a>
        </Link>
      </Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">{t.google_analysis}</Typography>
      </Grid>
      <Grid>
        <Typography color="text.secondary" variant="body1">{google_analysis_info}</Typography>
        <Link href={google_analysis_url} color="text.link">
          <a target="_blank" rel="noopener noreferrer">{google_analysis_url}</a>
        </Link>
      </Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">{t.copy_right}</Typography>
      </Grid>
      <Grid>
        <Typography color="text.secondary" variant="body1">{copy_right_info}</Typography>
      </Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">{t.link_free}</Typography>
      </Grid>
      <Grid>
        <Typography color="text.secondary" variant="body1">{link_free_info}</Typography>
      </Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">{t.disclaimer}</Typography>
      </Grid>
      <Grid>
        <Typography color="text.secondary" variant="body1">{disclaimer_info}</Typography>
      </Grid>
    </Grid>
  );
}

const PrivacyPolicy: NextPage<CategoriesResponseProps> = ({ categories, variables }) => {
  const { data, error, isLoading } = useSWR([getCategories, variables], { fallbackData: { categories: categories, variables: variables }, })
  if (isLoading) return <Loading />
  if (data != null) {
    return <>
      {isMobile ?
        <Grid
          container
          direction="column"
          sx={{ flexGrow: 1 }}
        >
          <Grid container p={1.5} xs={12}>
            <Sidebar categories={data.categories} />
          </Grid>
          <Grid container direction="column" p={1.5} xs={12} sx={{ flexGrow: 1 }}>
            <PrivacyPolicyContent />
          </Grid>
        </Grid> :
        <Grid
          container
          direction="row"
          sx={{ flexGrow: 1 }}
          my={2}
        >
          <Grid container xs={10} sx={{ flexGrow: 1 }}>
            <PrivacyPolicyContent />
          </Grid>
          <Grid container xs={2} sx={{ flexGrow: 1 }}>
            <Sidebar categories={data.categories} />
          </Grid>
        </Grid>
      }
    </>
  } else {
    return <GraphqlError error={error} />
  }

}

export default PrivacyPolicy