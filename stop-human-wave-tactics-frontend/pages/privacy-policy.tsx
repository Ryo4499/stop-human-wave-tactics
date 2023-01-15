import { Box, Typography, ListItemText } from "@mui/material";
import { request } from "graphql-request"
import Grid from "@mui/material/Unstable_Grid2";
import { useLocale } from "../lib/locale"
import type { NextPage } from "next";
import Sidebar from "../components/Common/Sidebar";
import { isMobile } from "react-device-detect";
import { getCategories } from "../graphql/getCategories";
import { getBackendURL } from "../lib/graphqlClient";
import { CategoryEntityResponseCollection } from "../types/apollo_client";
import { DisplayError } from "../components/Common/DisplayError";
import { CategoriesProps, IStaticProps } from "../types/general";
import { ParticlesContext } from "./_app";
import { useContext } from "react";

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
  const variables = { pagination: {}, locale: locale }
  const result = await request(getBackendURL(), getCategories, variables).then(({ categories }: { categories: CategoryEntityResponseCollection }) => {
    return {
      props: {
        categories: categories
      },
      notFound: false,
      revalidate: 300,
    };
  })
  if (result != null) {
    return result
  } else {
    return {
      notFound: true,
      revalidate: 300
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
    <Grid container direction="row">
      <Box>
        <ListItemText primary={t.site_info} secondary={site_info} />
      </Box>
      <Box>
        <ListItemText
          primary={t.google_ad}
          secondary={google_ad_info}
        />
        <a href={google_ad_url}>{google_ad_url}</a>
      </Box>
      <Box>
        <ListItemText
          primary={t.google_analysis}
          secondary={google_analysis_info}
        />
        <a href={google_analysis_url}>{google_analysis_url}</a>
      </Box>
      <Box>
        <ListItemText primary={t.copy_right} secondary={copy_right_info} />
      </Box>
      <Box>
        <ListItemText primary={t.link_free} secondary={link_free_info} />
      </Box>
      <Box>
        <ListItemText primary={t.disclaimer} secondary={disclaimer_info} />
      </Box>
    </Grid>
  );
}

const PrivacyPolicy: NextPage<CategoriesProps> = ({ categories }) => {
  const { mainParticle } = useContext(ParticlesContext)
  if (categories) {
    return <>
      {isMobile ?
        <Grid
          container
          direction="column"
          sx={{ flexGrow: 1 }}
        >
          <Grid container p={1.5} xs={12}>
            <Sidebar categories={categories} />
          </Grid>
          <Grid container direction="column" p={1.5} xs={12} sx={{ flexGrow: 1 }}>
            <PrivacyPolicyContent />
          </Grid>
        </Grid> :
        <Grid
          container
          direction="row"
          sx={{ flexGrow: 1 }}
        >
          <Grid container xs={10} sx={{ flexGrow: 1 }}>
            <PrivacyPolicyContent />
          </Grid>
          <Grid container xs={2} sx={{ flexGrow: 1 }}>
            <Sidebar categories={categories} />
          </Grid>
        </Grid>
      }
    </>
  } else {
    return <DisplayError error={"page"} />
  }

}

export default PrivacyPolicy