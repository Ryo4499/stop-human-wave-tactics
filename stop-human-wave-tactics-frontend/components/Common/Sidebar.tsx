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
import { Categories } from "../Category";
import { useRouter } from "next/router";
import { CategoriesProps } from "../../types/general";


const Sidebar = ({ categories }: CategoriesProps) => {
  const router = useRouter()
  const { locale, locales, t } = useLocale();

  const submitHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      router.push({ pathname: "/search", query: { title: e.target.value } })
    }
  }

  const githuburl = "https://github.com/Ryo4499"
  const twitterurl = "https://twitter.com/ar4499_"
  const facebookurl = "https://www.facebook.com/profile.php?id=100090145990107"
  const instagramurl = "https://www.instagram.com/ar4499_/"

  return (
    <Grid container direction="column" sx={{ backgroundColor: 'background.sidebar', flexGrow: 1 }} >
      <Grid container direction="row" justifyContent="center" >
        < Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center" my={2} xs={12}>
          <Grid mx={1} mt={1} alignItems="center">
            <SearchIcon fontSize="large" sx={{ color: "text.primary" }} />
          </Grid >
          <Grid alignItems="center">
            <TextField sx={{ flexGrow: 1, color: "text.primary", "& label": { color: "text.primary" } }} id="outlined-basic" label={t.search} variant="outlined" onKeyDown={submitHandle} />
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
                <a href={githuburl}>
                  <GitHubIcon sx={{ fontSize: "1.4rem", color: "text.secondary" }} />
                </a>
                <a href={twitterurl}>
                  <TwitterIcon sx={{ fontSize: "1.4rem", color: "text.secondary" }} />
                </a>
                <a href={facebookurl}>
                  <FacebookIcon sx={{ fontSize: "1.4rem", color: "text.secondary" }} />
                </a>
                <a href={instagramurl}>
                  <InstagramIcon sx={{ fontSize: "1.4rem", color: "text.secondary" }} />
                </a>
              </Stack>
            </Grid>
          </Grid>
          <Categories categories={categories} />
        </Grid>
      </Grid>
    </Grid >
  );
}

export default Sidebar