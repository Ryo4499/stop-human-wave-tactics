import { useState, SyntheticBaseEvent } from "react"
import Button from "@mui/material/Button"
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import { useLocale } from "../../lib/locale";
import { useRouter } from "next/router"
import Switch from "@mui/material/Switch"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton"
import { BrowserView, MobileView, isMobile } from "react-device-detect"

const Header = ({ dark, toggleDark }: { dark: boolean, toggleDark: () => void, }) => {
  const router = useRouter()
  const { locale, locales, t } = useLocale();
  const handleLocaleChange = (event: SyntheticBaseEvent) => {
    const selectLocale = event.target.innerText;
    router.push("/", "/", { locale: selectLocale })
  }
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {isMobile ?
          <Toolbar>
            <Grid container direction="row" alignItems="center" >
              <Grid container mt={2} xs={12}>
                <Link href="/">
                  {t.site_name}
                </Link>
              </Grid>
              <Grid container direction="row" xs={12} justifyContent="flex-end">
                <Grid container alignItems="center">
                  <TranslateIcon />
                  <FormControl required sx={{ m: 1, minWidth: 60 }} size="small">
                    <Select defaultValue={locale} value={locale}>
                      {locales.map((locale: string) => {
                        return (
                          <MenuItem key={locale} value={locale}>
                            {locale}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid container alignItems="center">
                  <IconButton color="secondary" onClick={() => toggleDark()}>
                    <Brightness4Icon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          :
          <Toolbar>
            <Grid container sx={{ flexGrow: 1 }}>
              <Link href="/">
                {t.site_name}
              </Link>
            </Grid>
            <Grid container alignItems="center">
              <TranslateIcon sx={{ mx: 1 }} />
              <FormControl required size="small">
                <Select defaultValue={locale} value={locale}>
                  {locales.map((locale: string) => {
                    return (
                      <MenuItem key={locale} value={locale} onClick={handleLocaleChange}>
                        {locale}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid container alignItems="center" >
              <IconButton color="secondary" onClick={() => toggleDark()}>
                <Brightness4Icon />
              </IconButton>
            </Grid>
          </Toolbar>
        }
      </AppBar>
    </Grid >
  );
};
export default Header;
