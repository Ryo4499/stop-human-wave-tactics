import { ApolloError } from "@apollo/client";
import Grid from "@mui/material/Unstable_Grid2"

interface MutationError {
  __typename: string;
  code: string;
  message: string;
}

interface DisplayErrorProps {
  error?: ApolloError | MutationError;
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
  if (
    error instanceof ApolloError &&
    error.networkError &&
    "result" in error.networkError &&
    error.networkError.result?.errors?.length
  ) {
    return (
      <Grid container sx={{ flexGrow: 1 }}>
        {error.networkError.result.errors.map((error: Error, i: string) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <strong>Shoot!</strong>
            <p data-test="graphql-error">
              {error.message.replace("GraphQL error: ", "")}
            </p>
          </div>
        ))}
      </Grid>
    );
  }
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <strong>Shoot!</strong>
      <p data-test="graphql-error">
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </Grid>
  );
};

