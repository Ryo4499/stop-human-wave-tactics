import { ApolloError } from "@apollo/client";

interface MutationError {
  __typename: string;
  code: string;
  message: string;
}

interface DisplayErrorProps {
  error?: ApolloError | MutationError;
}
export const DisplayError = ({ error }: DisplayErrorProps) => {
  if (!error || !error.message) return null;
  if (
    error instanceof ApolloError &&
    error.networkError &&
    "result" in error.networkError &&
    error.networkError.result?.errors?.length
  ) {
    return (
      <>
        {error.networkError.result.errors.map((error: Error, i: string) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <strong>Shoot!</strong>
            <p data-test="graphql-error">
              {error.message.replace("GraphQL error: ", "")}
            </p>
          </div>
        ))}
      </>
    );
  }
  return (
    <div>
      <strong>Shoot!</strong>
      <p data-test="graphql-error">
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </div>
  );
};
