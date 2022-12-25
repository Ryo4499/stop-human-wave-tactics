import { useRouter } from "next/router";
import Grid from "@mui/material/Unstable_Grid2";
import Select from "@mui/material/Select";
import AppBar from "@mui/material/AppBar";
import FormControl from "@mui/material/FormControl";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import { useLocale, handleLocaleChange } from "../../lib/locale";
import { useQuery } from "@apollo/client";
import { Loading } from "../Common/Loading";
import { DisplayError } from "../Common/DisplayError";
import { addApolloState, initializeApollo } from "../../lib/apollo";

export const Header = () => {
  const { locale, locales, t } = useLocale();
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {t.site_name}
          </Typography>
          <Grid display="flex" spacing={2} alignItems="center">
            <TranslateIcon fontSize="large" sx={{ mx: 1 }} />
          </Grid>
          <Grid>
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
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default Header;
