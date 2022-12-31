import { Box, Typography, ListItemText } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocale } from "../lib/locale"

export default function PrivacyPolicy() {
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
