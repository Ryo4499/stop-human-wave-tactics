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
import { useLocale } from "../../lib/locale"
import { isMobile } from "react-device-detect"
import { CategoriesProps } from "../../types/general";
import { Categories } from "../Category";
import { Particles } from "tsparticles-engine";
import { loadFull } from "tsparticles"
import { Engine } from "tsparticles-engine"
import { useCallback } from "react";
import { useRouter } from "next/router";

const Sidebar = ({ categories }: CategoriesProps) => {
  const router = useRouter()
  const { locale, locales, t } = useLocale();

  const submitHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("call")
    if (e.key === "Enter") {
      e.preventDefault()
      console.log(e.target.value)
      router.push({ pathname: "/search", query: { title: e.target.value } })
    }
  }

  // load particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Grid container direction="column" sx={{ backgroundColor: 'background.default', flexGrow: 1 }} >
      {
        isMobile ?
          < Grid container direction="row" justifyContent="stretch" alignItems="center" my={2} px={2} sx={{ flexGrow: 1 }}>
            <Grid xs={1}>
              <SearchIcon fontSize="large" />
            </Grid>
            <Grid xs={11}>
              <TextField sx={{ flexGrow: 1 }} id="outlined-basic" label={t.search} variant="outlined"
                onKeyDown={submitHandle}
              />
            </Grid>
          </Grid >
          :
          <Grid container direction="row" justifyContent="center" >
            < Grid container direction="row" justifyContent="center" alignItems="center" my={2} xs={12}>
              <Grid container xs={1}>
              </Grid>
              <Grid container xs={2} mr={"-1rem"}>
                <SearchIcon fontSize="large" />
              </Grid >
              <Grid container xs={8}>
                <TextField sx={{ flexGrow: 1 }} id="outlined-basic" label={t.search} variant="outlined" onKeyDown={submitHandle} />
              </Grid>
              <Grid container xs={1}>
              </Grid>
            </Grid >
            <Grid container justifyContent="center" py={2} xs={12}>
              <Avatar sx={{ width: "8rem", height: "8rem" }} alt="Avater" src="/ar44.jpg" />
            </Grid>
            <Grid container ml={"2rem"}>
              <Grid container py={0.5}>
                <Grid container xs={12}>
                  <Typography variant="subtitle1">Author</Typography>
                </Grid>
                <Grid container xs={1}></Grid>
                <Grid container xs={11} >
                  <Typography variant="subtitle1">{t.user}</Typography>
                </Grid>
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
              <Categories categories={categories} />
            </Grid>
          </Grid>
      }
    </Grid >
  );
}

export default Sidebar