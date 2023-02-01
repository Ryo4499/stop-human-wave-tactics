import Link from "next/link"
import { Typography, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocale } from "../../lib/locale";

const Footer = () => {
  const { locale, locales, t } = useLocale();
  return (
    <Grid container xs={12} >
      <AppBar position="static">
        <Toolbar >
          <Grid container justifyContent="center" alignItems="center" xs={12} sx={{ color: "text.primary" }}>
            <Grid container mx={1}>
              <Link href="/">
                {t.top}
              </Link>
            </Grid>
            <Grid container mx={1}>
              <Link href="/privacy-policy">
                {t.privacy_policy}
              </Link>
            </Grid>
            <Grid container mx={1}>
              <Link href="/portofolios">
                {t.portofolios}
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid >
  );
}
export default Footer