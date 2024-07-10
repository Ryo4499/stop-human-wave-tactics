import type { KeyboardEvent } from "react";
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
import { Categories } from "../Categories";
import { Tags } from "../Tags";
import { useRouter } from "next/router";
import { CategoriesAndTagsProps } from "../../types/general";

const Sidebar = ({ categories, tags }: CategoriesAndTagsProps) => {
  const router = useRouter();
  const { t } = useLocale();

  const submitHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push({
        pathname: "/search",
        query: { title: (e.target as HTMLInputElement).value },
      });
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
          justifyContent="center"
          alignItems="center"
          my={2}
          xs={12}
        >
          <SearchIcon
            sx={{ color: "text.primary", mx: 1, fontSize: "2.0rem" }}
          />
          <TextField
            sx={{
              fontSize: "1.6rem",
              color: "text.primary",
              "& label": { color: "text.primary" },
            }}
            id="outlined-basic"
            label={t.search}
            variant="outlined"
            onKeyDown={submitHandle}
          />
        </Grid>
        <Grid container justifyContent="center" py={2} xs={12}>
          <Avatar
            sx={{ width: "18vh", height: "18vh" }}
            alt="Avater"
            src="/static/images/ar44.webp"
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          ml={2}
          my={2}
          xs={12}
        >
          <Grid xs={12}>
            <Stack my={1}>
              <Typography my={1} variant="subtitle1" color="text.primary">
                Author
              </Typography>
              <List disablePadding>
                <ListItem sx={{ pl: 4 }} disablePadding>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t.author}
                  </Typography>
                </ListItem>
              </List>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Stack my={1}>
              <Typography my={1} variant="subtitle1" color="text.primary">
                Jobs
              </Typography>
              <List disablePadding>
                <ListItem sx={{ pl: 4, py: 0.5 }} disablePadding>
                  <Typography variant="subtitle2" color="text.secondary">
                    AI Engineer
                  </Typography>
                </ListItem>
                <ListItem sx={{ pl: 4 }} disablePadding>
                  <Typography variant="subtitle2" color="text.secondary">
                    Full Stack Engineer
                  </Typography>
                </ListItem>
              </List>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Stack my={1}>
              <Typography my={1} variant="subtitle1" color="text.primary">
                SNS
              </Typography>
              <List disablePadding>
                <ListItem sx={{ pl: 4 }} disablePadding>
                  <Stack direction="row" spacing={1.5}>
                    {githubUrl && (
                      <Grid mx={1}>
                        <Link href={githubUrl}>
                          <GitHubIcon
                            sx={{ fontSize: "2.8vh", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                    {linkedinUrl && (
                      <Grid mx={1}>
                        <Link href={linkedinUrl}>
                          <LinkedInIcon
                            sx={{ fontSize: "2.8vh", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                    {twitterUrl && (
                      <Grid mx={1}>
                        <Link href={twitterUrl}>
                          <TwitterIcon
                            sx={{ fontSize: "2.8vh", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                    {facebookUrl && (
                      <Grid mx={1}>
                        <Link href={facebookUrl}>
                          <FacebookIcon
                            sx={{ fontSize: "2.8vh", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                    {instagramUrl && (
                      <Grid mx={1}>
                        <Link href={instagramUrl}>
                          <InstagramIcon
                            sx={{ fontSize: "2.8vh", color: "text.secondary" }}
                          />
                        </Link>
                      </Grid>
                    )}
                  </Stack>
                </ListItem>
              </List>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Categories contents={categories} />
          </Grid>
          <Grid xs={12}>
            <Tags contents={tags} />
          </Grid>
          <Grid xs={12}>
            <Stack my={1}>
              <Stack my={1}>
                <Typography my={1} variant="subtitle1" color="text.primary">
                  PlayGround
                </Typography>
                <List disablePadding>
                  <ListItem sx={{ pl: 4, py: 0.5 }} disablePadding>
                    <Link href="/morse-code" as="/morse-code">
                      <Typography color="text.link">{t.morse_code}</Typography>
                    </Link>
                  </ListItem>
                </List>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
