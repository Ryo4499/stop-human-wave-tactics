import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocale } from "../../lib/locale";

export const SearchNotFound = ({ filter }: { filter: string }) => {
  const { t } = useLocale();
  return (
    <Grid
      container
      direction="column"
      mx={5}
      spacing={3}
      sx={{
        backgroundColor: "background.content",
        my: { md: 0, xs: 2 },
        flexGrow: 1,
      }}
    >
      {filter != "" ? (
        <Grid container xs={12} mx={3} mt={2} mb={1}>
          <Typography variant="h6" color="text.secondary">
            {filter}
          </Typography>
        </Grid>
      ) : null}
      <Grid container mx={5} my={2}>
        <Typography variant="h4" color="text.secondary">
          {t.not_found}
        </Typography>
      </Grid>
    </Grid>
  );
};
