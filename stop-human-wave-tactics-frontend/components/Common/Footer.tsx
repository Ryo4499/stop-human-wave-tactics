import Link from "next/link"
import { Typography, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocale } from "../../lib/locale";

export default function ButtonAppBar() {
  const { locale, locales, t } = useLocale();
  return (
    <Grid container xs={12} >
      <AppBar position="static">
        <Toolbar justifyContent="center" alignItems="center">
          <Button>
            <Link href="/">{t.top}</Link>
          </Button>
          <Button>
            <Link href="/privacy-policy">{t.privacy_policy}</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
