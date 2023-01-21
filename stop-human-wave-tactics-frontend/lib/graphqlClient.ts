import { GraphQLClient } from 'graphql-request';

export const getBackendURL = () => process.env.NEXT_PUBLIC_BACKEND_URL || ""
export const getProxyURL = () => process.env.PROXY_URL || ""
export const client = new GraphQLClient(getProxyURL());