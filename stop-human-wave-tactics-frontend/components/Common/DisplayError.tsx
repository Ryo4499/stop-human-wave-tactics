import Grid from "@mui/material/Unstable_Grid2"

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
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid>
        Shoot {error}
      </Grid>
    </Grid>
  )
}

export const GraphqlError = ({ error }: DisplayErrorProps) => {
  if (!error || !error.message) return null;
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <strong>Shoot!</strong>
      <p data-test="graphql-error">
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </Grid>
  );
};

