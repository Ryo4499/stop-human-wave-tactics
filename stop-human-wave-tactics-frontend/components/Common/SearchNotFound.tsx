import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useLocale } from "../../lib/locale";

export const SearchNotFound = ({ filter }: { filter: string }) => {
  const { t } = useLocale();
  return (
    <Grid
      container
      direction="column"
      mx={5}
      my={2}
      sx={{
        backgroundColor: "background.content",
        flexGrow: 1,
      }}
    >
      {filter != "" ? (
        <Grid container mx={3} my={3}>
          <Typography variant="h6" color="text.secondary">
            {filter}
          </Typography>
        </Grid>
      ) : null}
      <Grid container mx={5} mb={5}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="anchor-center"
          spacing={1}
        >
          <SentimentVeryDissatisfiedIcon
            sx={{ color: "text.secondary", fontSize: "4.0vh" }}
          />
          <Typography variant="body1" color="text.secondary">
            {t.not_found}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
