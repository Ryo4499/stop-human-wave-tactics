import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { request } from "graphql-request";
import { GetStaticProps } from "next";
import useSWR from "swr";
import { useLocale } from "../lib/locale";
import type { NextPage } from "next";
import Sidebar from "../components/Common/Sidebar";
import { getCategories } from "../graphql/getCategories";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import { CategoryEntityResponseCollection } from "../types/graphql_res";
import { GraphqlError } from "../components/Common/DisplayError";
import { CategoriesResponseProps, IStaticProps } from "../types/general";
import Meta from "../components/utils/Head";

export const getStaticProps = (async ({
  locales,
  locale,
  defaultLocale,
}: IStaticProps) => {
  const variables = { pagination: {}, locale: locale };
  const result = await request(
    getBackendGraphqlURL(),
    getCategories,
    variables
  ).then((response) => {
    const categories = response as CategoryEntityResponseCollection;
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
  const site_text = t.site_text;
  const typo = (text: String) =>
    text.split("\n").map((line, key) => (
      <Typography key={key} variant="body1" color="text.secondary">
        {line}
      </Typography>
    ));
  const site_info = typo(site_text);

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
      mx={5}
      spacing={3}
      sx={{
        backgroundColor: "background.content",
        my: { md: 0, xs: 2 },
        flexGrow: 1,
      }}
    >
      <Grid>
        <Typography color="text.primary" variant="h6">
          {t.site_info}
        </Typography>
      </Grid>
      <Grid>{site_info}</Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">
          {t.google_ad}
        </Typography>
      </Grid>
      <Grid>
        {google_ad_info}
        <Link href={google_ad_url} color="text.link">
          {google_ad_url}
        </Link>
      </Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">
          {t.google_analysis}
        </Typography>
      </Grid>
      <Grid>
        {google_analysis_info}
        <Link href={google_analysis_url} color="text.link">
          {google_analysis_url}
        </Link>
      </Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">
          {t.copy_right}
        </Typography>
      </Grid>
      <Grid>{copy_right_info}</Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">
          {t.link_free}
        </Typography>
      </Grid>
      <Grid>{link_free_info}</Grid>
      <Grid>
        <Typography color="text.primary" variant="h6">
          {t.disclaimer}
        </Typography>
      </Grid>
      <Grid>{disclaimer_info}</Grid>
    </Grid>
  );
};

const PrivacyPolicy: NextPage<CategoriesResponseProps> = ({
  categories,
  variables,
}) => {
  const { data, error } = useSWR([getCategories, variables], {
    fallbackData: { categories: categories, variables: variables },
  });
  if (data != null) {
    return (
      <Grid container>
        <Meta
          title="Privacy Policy Page"
          description="This page published about privacy policy."
          keyword={categories.data
            .map((value) => value.attributes?.name)
            .join(" ")}
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
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
