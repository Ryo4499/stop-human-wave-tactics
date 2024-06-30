import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useLocale } from "../../lib/locale";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { locale, locales, t } = useLocale();
  const handleLocaleChange = (event: any) => {
    const selectLocale = event.target.innerText;
    router.push("/", "/", { locale: selectLocale });
  };
  if (locales != null) {
    return (
      <Grid container xs={12}>
        <AppBar position="relative">
          <Toolbar>
            <Grid container sm={4} xs={6}>
              <Link href="/" as="/">
                <Typography variant="h6" color="text.primary">
                  {t.site_name}
                </Typography>
              </Link>
            </Grid>
            <Grid
              direction="row"
              container
              alignItems="center"
              justifyContent="flex-end"
              xs={6}
              sm={8}
            >
              <Grid container alignItems="center">
                <TranslateIcon
                  sx={{ mx: 1, fontSize: 24, color: "text.primary" }}
                />
                <FormControl required size="small">
                  <Select
                    inputProps={{ "aria-label": "language" }}
                    defaultValue={locale}
                    value={locale}
                  >
                    {locales.map((locale: string) => {
                      return (
                        <MenuItem
                          key={locale}
                          value={locale}
                          onClick={handleLocaleChange}
                        >
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.primary"
                            noWrap
                          >
                            {locale}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    );
  } else {
    return null;
  }
};
export default Header;
