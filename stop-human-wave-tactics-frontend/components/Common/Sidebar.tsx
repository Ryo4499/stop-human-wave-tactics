import { Avatar, Typography } from "@mui/material";
import { styled, alpha, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box"
import InputBase from "@mui/material/InputBase";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { source_code_pro } from "../../src/font";
import { useLocale } from "../../lib/locale"
import { isMobile } from "react-device-detect"

export default function Sidebar() {
  const { locale, locales, t } = useLocale();

  return (
    <Grid container direction="column">
      < Grid container direction="row" justifyContent="stretch" alignItems="center">
        <SearchIcon xs={1} fontSize="large" />
        <TextField xs={11} id="outlined-basic" label={t.search} variant="outlined" size="large" />
      </Grid >
      {!isMobile ?
        <Grid container direction="row" justifyContent="center">
          <Grid container justifyContent="center" py={2}>
            <Avatar xs={12} sx={{ width: "8rem", height: "8rem" }} alt="AR44" src="/ar44.jpg" />
          </Grid>
          <Grid container ml={"2rem"}>
            <ThemeProvider theme={source_code_pro}>
              <Grid container xs={12}>
                <Typography variant="h5">AR44</Typography>
              </Grid>
              <Grid container direciton="row" py={0.5}>
                <Grid container xs={12}>
                  <Typography variant="h6">Jobs</Typography>
                </Grid>
                <Grid container xs={1}></Grid>
                <Grid container xs={11}>
                  <Typography variant="subtitle1">AI Enginner</Typography>
                </Grid>
                <Grid container xs={1}></Grid>
                <Grid container xs={11}>
                  <Typography variant="subtitle1">Full Stack Enginner</Typography>
                </Grid>
              </Grid>
              <Grid container direction="row" xs={12} py={0.5}>
                <Grid container xs={12} py={0.5}>
                  <Typography variant="h6">Social Media</Typography>
                </Grid>
                <Grid container xs={1}></Grid>
                <Grid container xs={11}>
                  <Stack direction="row" spacing={0.8}>
                    <a href="https://github.com/Ryo4499">
                      <GitHubIcon fontSize="large" />
                    </a>
                    <a href="">
                      <TwitterIcon fontSize="large" />
                    </a>
                    <a href="">
                      <FacebookIcon fontSize="large" />
                    </a>
                    <a href="">
                      <InstagramIcon fontSize="large" />
                    </a>
                  </Stack>
                </Grid>
              </Grid>
            </ThemeProvider>
          </Grid>
        </Grid>
        : null
      }
    </Grid >
  );
}
