import { useRouter } from "next/router";
import { useState } from "react"
import Grid from "@mui/material/Unstable_Grid2";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import { useLocale, handleLocaleChange } from "../../lib/locale";
import Switch from "@mui/material/Switch"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton"
import { BrowserView, MobileView, isMobile } from "react-device-detect"

export const Header = ({ dark, setDark }: { dark: boolean, setDark: (dark: boolean) => void }) => {
  const { locale, locales, t } = useLocale();
  const [expandMenu, setExpandMenu] = useState(false)
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {isMobile ?
          <Toolbar>
            <Grid container direction="row" alignItems="center" >
              <Grid container mt={2} xs={12}>
                <Typography
                  variant="h5"
                  component="div"
                >
                  {t.site_name}
                </Typography>
              </Grid>
              <Grid container direction="row" xs={12} justifyContent="flex-end">
                <Grid container alignItems="center">
                  <TranslateIcon fontSize="medium" />
                  <FormControl required sx={{ m: 1, minWidth: 60 }} size="small">
                    <Select>
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
                  <IconButton onClick={() => setDark(!dark)}>
                    <Brightness4Icon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          :
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {t.site_name}
            </Typography>
            <Grid container alignItems="center" >
              <TranslateIcon fontSize="large" sx={{ mx: 1 }} />
              <FormControl required>
                <Select>
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
            <Grid container sx={{ ml: 2 }} alignItems="center" >
              <Brightness4Icon />
              <Switch checked={dark} onChange={() => { setDark(!dark) }}></Switch>
            </Grid>
          </Toolbar>
        }
      </AppBar>
    </Grid >
  );
};
export default Header;
