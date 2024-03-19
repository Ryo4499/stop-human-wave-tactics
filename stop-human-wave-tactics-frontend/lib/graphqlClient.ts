import { GraphQLClient } from 'graphql-request';
import path from "path"

export const getBackendURL = () => process.env.NEXT_PUBLIC_BACKEND_URL || ""
export const getBackendGraphqlURL = () => path.join(getBackendURL(), "graphql")
export const client = new GraphQLClient(path.join("", "/graphql"));