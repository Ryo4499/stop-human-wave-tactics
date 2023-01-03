import Link from "next/link"
import { useRouter } from "next/router"
import { Typography, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocale } from "../../lib/locale";

const Footer = () => {
  const { locale, locales, t } = useLocale();
  const router = useRouter()
  return (
    <Grid container xs={12} >
      <AppBar position="static">
        <Toolbar >
          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <Link href="/">
              {t.top}
            </Link>
            <Link href="/privacy-policy">
              {t.privacy_policy}
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
export default Footer