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
import { isMobile } from "react-device-detect"
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
    router.push("/", "/", { locale: selectLocale })
  }
  if (locales != null) {
    return (
      <Grid container sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ flexGrow: 1 }}>
          {isMobile ?
            <Toolbar sx={{ flexGrow: 1 }} >
              <Grid container direction="row" alignItems="center" sx={{ flexGrow: 1 }} m={1}>
                <Grid container direction="row" xs={12}>
                  <Grid container>
                    <Link href="/">
                      <Typography variant="h5">
                        {t.site_name}
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid container my={1} justifyContent="flex-end">
                    <Grid container alignItems="center">
                      <TranslateIcon sx={{ color: "text.primary" }} />
                      <FormControl required sx={{ mx: 1, minWidth: 60 }} size="small">
                        <Select defaultValue={locale} value={locale}>
                          {locales.map((locale: string) => {
                            return (
                              <MenuItem key={locale} value={locale} >
                                <Typography color="text.primary" noWrap>
                                  {locale}
                                </Typography>
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      {
                        true ? null :
                          <Grid container alignItems="center">
                            <IconButton onClick={colorMode.toggleColorMode} sx={{ color: "text.primary" }}>
                              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                          </Grid>
                      }
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
            :
            <Toolbar sx={{ flexGrow: 1 }}>
              <Grid container sx={{ flexGrow: 1 }}>
                <Link href="/">
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
          }
        </AppBar>
      </Grid >
    );
  } else {
    return null
  }
};
export default Header;
