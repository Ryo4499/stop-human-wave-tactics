import { Avatar, Typography } from "@mui/material";
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
import { Categories } from "../Category";
import { useRouter } from "next/router";
import { CategoryEntityResponseCollection } from "../../types/graphql_res";

interface CategoriesProps {
  categories: CategoryEntityResponseCollection
}

const Sidebar = ({ categories }: CategoriesProps) => {
  const router = useRouter()
  const { locale, locales, t } = useLocale();

  const submitHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      router.push({ pathname: "/search", query: { title: e.target.value } })
    }
  }

  return (
    <Grid container direction="column" sx={{ backgroundColor: 'background.sidebar', flexGrow: 1 }} >
      {
        isMobile ?
          < Grid container direction="row" justifyContent="stretch" alignItems="center" my={2} px={2} sx={{ flexGrow: 1 }}>
            <Grid container xs={12} alignItems="center">
              <SearchIcon fontSize="large" sx={{ color: "text.primary" }} />
              <TextField sx={{ ml: 1, mr: 2, flexGrow: 1, color: "text.primary", "& label": { color: "text.primary" } }} id="outlined-basic" label={t.search} variant="outlined"
                onKeyDown={submitHandle}
              />
            </Grid>
          </Grid >
          :
          <Grid container direction="row" justifyContent="center" >
            < Grid container direction="row" justifyContent="center" alignItems="center" my={2} xs={12}>
              <Grid container xs={1}>
              </Grid>
              <Grid container xs={2}>
                <SearchIcon fontSize="large" sx={{ color: "text.primary" }} />
              </Grid >
              <Grid container xs={8}>
                <TextField sx={{ flexGrow: 1, color: "text.primary", "& label": { color: "text.primary" } }} id="outlined-basic" label={t.search} variant="outlined" onKeyDown={submitHandle} />
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
                  <Typography variant="subtitle1" color="text.primary">Author</Typography>
                </Grid>
                <Grid container xs={1}></Grid>
                <Grid container xs={11} >
                  <Typography variant="subtitle1" color="text.secondary">{t.user}</Typography>
                </Grid>
              </Grid>
              <Grid container py={0.5}>
                <Grid container xs={12}>
                  <Typography variant="subtitle1" color="text.primary">Jobs</Typography>
                </Grid>
                <Grid container xs={1}></Grid>
                <Grid container xs={11}>
                  <Typography variant="subtitle2" color="text.secondary">AI Enginner</Typography>
                </Grid>
                <Grid container xs={1}></Grid>
                <Grid container xs={11}>
                  <Typography variant="subtitle2" color="text.secondary">Full Stack Enginner</Typography>
                </Grid>
              </Grid>
              <Grid container direction="row" xs={12} py={0.5}>
                <Grid container xs={12} py={0.5}>
                  <Typography variant="subtitle1" color="text.primary">Social Media</Typography>
                </Grid>
                <Grid container xs={1}></Grid>
                <Grid container xs={11}>
                  <Stack direction="row" spacing={0.8}>
                    <a href="https://github.com/Ryo4499">
                      <GitHubIcon sx={{ fontSize: "1.4rem", color: "text.secondary" }} />
                    </a>
                    <a href="https://twitter.com/ar4499_">
                      <TwitterIcon sx={{ fontSize: "1.4rem", color: "text.secondary" }} />
                    </a>
                    <a href="">
                      <FacebookIcon sx={{ fontSize: "1.4rem", color: "text.secondary" }} />
                    </a>
                    <a href="">
                      <InstagramIcon sx={{ fontSize: "1.4rem", color: "text.secondary" }} />
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