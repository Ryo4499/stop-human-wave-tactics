import { React } from "react"
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
import Image from 'next/image'
import { useLocale } from "../../lib/locale";
import { Categories } from "../Category";
import { useRouter } from "next/router";
import { CategoriesProps } from "../../types/general";

const Sidebar = ({ categories }: CategoriesProps) => {
  const router = useRouter();
  const { locale, locales, t } = useLocale();

  const submitHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push({ pathname: "/search", query: { title: e.target.value } });
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
            mx={1}
            mt={1}
            fontSize="medium"
            sx={{ color: "text.primary" }}
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
          <Avatar src="/static/images/ar44.jpg" alt="Avatar" />
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
                      <Link href={githubUrl} sx={{ px: 2 }}>
                        <GitHubIcon
                          sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                        />
                      </Link>
                    )}
                    {linkedinUrl && (
                      <Link href={linkedinUrl} sx={{ mx: 2 }}>
                        <LinkedInIcon
                          sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                        />
                      </Link>
                    )}
                    {twitterUrl && (
                      <Link href={twitterUrl} sx={{ mx: 2 }}>
                        <TwitterIcon
                          sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                        />
                      </Link>
                    )}
                    {facebookUrl && (
                      <Link href={facebookUrl} sx={{ mx: 2 }}>
                        <FacebookIcon
                          sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                        />
                      </Link>
                    )}
                    {instagramUrl && (
                      <Link href={instagramUrl} sx={{ mx: 2 }}>
                        <InstagramIcon
                          sx={{ fontSize: "1.4rem", color: "text.secondary" }}
                        />
                      </Link>
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
