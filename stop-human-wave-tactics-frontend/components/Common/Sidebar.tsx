import { Avatar, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { source_code_pro } from "../../src/font";
import { useLocale } from "../../lib/locale"
import { isMobile } from "react-device-detect"

const Sidebar = () => {
  const { locale, locales, t } = useLocale();
  return (
    <Grid container direction="column" sx={{ backgroundColor: 'background.default', flexGrow: 1 }} >
      {
        !isMobile ?
          <Grid container direction="row" justifyContent="center" >
            < Grid container direction="row" justifyContent="center" alignItems="center" my={2} xs={12}>
              <Grid container xs={1}>
              </Grid>
              <Grid container xs={2} mr={"-1rem"}>
                <SearchIcon fontSize="large" />
              </Grid >
              <Grid container xs={8}>
                <TextField sx={{ flexGrow: 1 }} id="outlined-basic" label={t.search} variant="outlined" />
              </Grid>
              <Grid container xs={1}>
              </Grid>
            </Grid >
            <Grid container justifyContent="center" py={2} xs={12}>
              <Avatar sx={{ width: "8rem", height: "8rem" }} alt="Avater" src="/ar44.jpg" />
            </Grid>
            <Grid container ml={"2rem"}>
              <ThemeProvider theme={source_code_pro}>
                <Grid container xs={12}>
                  <Typography variant="h6">AR44</Typography>
                </Grid>
                <Grid container py={0.5}>
                  <Grid container xs={12}>
                    <Typography variant="subtitle1">Jobs</Typography>
                  </Grid>
                  <Grid container xs={1}></Grid>
                  <Grid container xs={11}>
                    <Typography variant="subtitle2">AI Enginner</Typography>
                  </Grid>
                  <Grid container xs={1}></Grid>
                  <Grid container xs={11}>
                    <Typography variant="subtitle2">Full Stack Enginner</Typography>
                  </Grid>
                </Grid>
                <Grid container direction="row" xs={12} py={0.5}>
                  <Grid container xs={12} py={0.5}>
                    <Typography variant="subtitle1">Social Media</Typography>
                  </Grid>
                  <Grid container xs={1}></Grid>
                  <Grid container xs={11}>
                    <Stack direction="row" spacing={0.8}>
                      <a href="https://github.com/Ryo4499">
                        <GitHubIcon sx={{ fontSize: "1.4rem" }} />
                      </a>
                      <a href="">
                        <TwitterIcon sx={{ fontSize: "1.4rem" }} />
                      </a>
                      <a href="">
                        <FacebookIcon sx={{ fontSize: "1.4rem" }} />
                      </a>
                      <a href="">
                        <InstagramIcon sx={{ fontSize: "1.4rem" }} />
                      </a>
                    </Stack>
                  </Grid>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
          :
          < Grid container direction="row" justifyContent="stretch" alignItems="center" my={2} px={2} sx={{ flexGrow: 1 }}>
            <Grid xs={1}>
              <SearchIcon fontSize="large" />
            </Grid>
            <Grid xs={11}>
              <TextField sx={{ flexGrow: 1 }} id="outlined-basic" label={t.search} variant="outlined" />
            </Grid>
          </Grid >
      }
    </Grid >
  );
}

export default Sidebar