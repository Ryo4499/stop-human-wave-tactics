import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import { useLocale } from "../../lib/locale";
import { useRouter } from "next/router"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from "@mui/material/IconButton"
import { Typography } from "@mui/material";
import { ColorModeContext } from "../../pages/_app";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext)
  const router = useRouter()
  const { locale, locales, t } = useLocale();
  const handleLocaleChange = (event: any) => {
    const selectLocale = event.target.innerText;
    router.push(router.pathname, router.pathname, { locale: selectLocale })
  }
  if (locales != null) {
    return (
      <Grid container xs={12}>
        <AppBar position="static" sx={{ flexGrow: 1 }}>
          <Toolbar sx={{ flexGrow: 1, justifyContent: "space-between" }} >
            <Grid container>
              <Link href="/" as="/">
                <Typography variant="h6" color="text.primary">
                  {t.site_name}
                </Typography>
              </Link>
            </Grid>
            <Grid container alignItems="center">
              <TranslateIcon sx={{ mx: 1, color: "text.primary" }} />
              <FormControl required size="small">
                <Select defaultValue={locale} value={locale}>
                  {locales.map((locale: string) => {
                    return (
                      <MenuItem key={locale} value={locale} onClick={handleLocaleChange}>
                        <Typography color="text.primary" noWrap>
                          {locale}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            {
              true ? null :
                <Grid container alignItems="center">
                  <IconButton onClick={colorMode.toggleColorMode} sx={{ color: "text.primary" }}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Grid>
            }
          </Toolbar>
        </AppBar>
      </Grid >
    );
  } else {
    return null
  }
};
export default Header;
