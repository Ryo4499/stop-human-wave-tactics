import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Meta from "./Meta";

interface MutationError {
  __typename: string;
  code: string;
  message: string;
}

interface DisplayErrorProps {
  error?: MutationError;
}

export const DisplayError = ({ error }: { error: string }) => {
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
      <Grid>
        <Typography variant="h5">Error</Typography>
        <Typography>{error}</Typography>
      </Grid>
    </Grid>
  );
};

export const GraphqlError = ({ error }: DisplayErrorProps) => {
  if (!error || !error.message) return null;
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
      <Meta title="Error Page" description="This page is network error page." />
      <Grid>
        <Typography variant="h5">Error</Typography>
        <Typography>{error.message.replace("GraphQL error: ", "")}</Typography>
      </Grid>
    </Grid>
  );
};
