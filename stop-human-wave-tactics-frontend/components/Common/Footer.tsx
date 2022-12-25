import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function ButtonAppBar() {
  return (
    <Grid container justifyContent="center">
      <Typography variant="h6" component="div">
        Created By Ryo Arai At 2022
      </Typography>
    </Grid>
  );
}
