import { Avatar, Typography } from "@mui/material";
import { styled, alpha, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { source_code_pro } from "../../src/font";
import { useLocale } from "../../lib/locale"

export default function Sidebar() {
  const { locale, locales, t } = useLocale();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <Grid container direction="column">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t.search}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Grid >
        <Avatar alt="AR44" src="/favicon.ico" />
      </Grid>
      <Grid >
        <Grid container>
          <ThemeProvider theme={source_code_pro}>
            <Grid item>
              <Typography>AR44</Typography>
            </Grid>
            <Grid item>
              <Typography>Jobs: AI Enginner/Full Stack Enginner</Typography>
            </Grid>
            <Grid item>
              <Typography>Social Media:</Typography>
            </Grid>
          </ThemeProvider>
        </Grid>
        <Grid container direction="row" justifyContent="flex-start" xs={12}>
          <Grid item sx={{ xs: 1 }}>
            <a href="https://github.com/Ryo4499">
              <GitHubIcon />
            </a>
          </Grid>
          <Grid item sx={{ xs: 1 }}>
            <a href="">
              <TwitterIcon />
            </a>
          </Grid>
          <Grid item sx={{ xs: 1 }}>
            <a href="">
              <FacebookIcon />
            </a>
          </Grid>
          <Grid item sx={{ xs: 1 }}>
            <a href="">
              <InstagramIcon />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
