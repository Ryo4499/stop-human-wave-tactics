import type { KeyboardEvent } from "react"
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { useLocale } from "../../lib/locale";
import { Categories } from "../Category";
import { useRouter } from "next/router";
import { CategoriesProps } from "../../types/general";

const Sidebar = ({ categories }: CategoriesProps) => {
  const router = useRouter();
  const { locale, locales, t } = useLocale();

  const submitHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push({ pathname: "/search", query: { title: (e.target as HTMLInputElement).value } });
    }
  };

  const githubUrl = "https://github.com/Ryo4499";
  const twitterUrl = "";
  const facebookUrl = "";
  const instagramUrl = "";
  const linkedinUrl =
    "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit";

  return (
    <Grid
      container
      direction="column"
      sx={{ backgroundColor: "background.sidebar", flexGrow: 1 }}
    >
      <Grid container direction="row" justifyContent="center">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          my={2}
          xs={12}
        >
          <SearchIcon
            fontSize="medium"
            sx={{ color: "text.primary", mx: 1, mt: 1 }}
          />
          <TextField
            sx={{
              fontSize: 14,
              color: "text.primary",
              "& label": { color: "text.primary" },
              width: "auto",
            }}
            id="outlined-basic"
            label={t.search}
            variant="outlined"
            onKeyDown={submitHandle}
          />
        </Grid>
        <Grid container justifyContent="center" py={2} xs={12}>
          <Avatar
            sx={{ width: "8rem", height: "8rem" }}
            alt="Avater"
            src="/static/images/ar44.webp"
          />
        </Grid>
        <Grid
          container
          ml={"2rem"}
          direction="row"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          my={2}
          xs={12}
        >
          <Grid xs={12}>
            <List>
              <ListItem disablePadding>
                <Typography variant="subtitle1" color="text.primary">
                  Author
                </Typography>
              </ListItem>
              <List disablePadding>
                <ListItem sx={{ pl: 4 }} disablePadding>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t.user}
                  </Typography>
                </ListItem>
              </List>
            </List>
          </Grid>
          <Grid xs={12}>
            <List>
              <ListItem disablePadding>
                <Typography variant="subtitle1" color="text.primary">
                  Jobs
                </Typography>
              </ListItem>
              <List disablePadding>
                <ListItem sx={{ pl: 4 }} disablePadding>
                  <Typography variant="subtitle2" color="text.secondary">
                    AI Enginner
                  </Typography>
                </ListItem>
                <ListItem sx={{ pl: 4 }} disablePadding>
                  <Typography variant="subtitle2" color="text.secondary">
                    Full Stack Enginner
                  </Typography>
                </ListItem>
              </List>
            </List>
          </Grid>
          <Grid xs={12}>
            <List>
              <ListItem disablePadding>
                <Typography variant="subtitle1" color="text.primary">
                  SNS
                </Typography>
              </ListItem>
              <List disablePadding>
                <ListItem sx={{ pl: 4 }} disablePadding>
                  <Stack direction="row" spacing={0.8}>
                    {githubUrl && (
                      <Grid px={2}>
                        <Link href={githubUrl} >
                          <GitHubIcon
                            sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                    {linkedinUrl && (
                      <Grid mx={2}>
                        <Link href={linkedinUrl} >
                          <LinkedInIcon
                            sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                    {twitterUrl && (
                      <Grid mx={2}>
                        <Link href={twitterUrl}>
                          <TwitterIcon
                            sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                    {facebookUrl && (
                      <Grid mx={2}>

                        <Link href={facebookUrl} >
                          <FacebookIcon
                            sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                    {instagramUrl && (
                      <Grid mx={2}>
                        <Link href={instagramUrl} >
                          <InstagramIcon
                            sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                  </Stack>
                </ListItem>
              </List>
            </List>
          </Grid>
          <Grid xs={12}>
            <Categories categories={categories} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
