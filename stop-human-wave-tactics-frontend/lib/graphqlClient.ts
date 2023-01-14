import { GraphQLClient } from 'graphql-request';
import HttpsProxyAgent from 'https-proxy-agent';

const options = {
        agent: HttpsProxyAgent(process.env.HTTP_PROXY || "")
}
export const getBackendURL = () => process.env.NEXT_PUBLIC_BACKEND_URL || ""
export const getProxyURL = () => process.env.HTTP_PROXY || ""
export const getClient = () => new GraphQLClient(getBackendURL());
export const getProxyClient = () => new GraphQLClient(getBackendURL(), options);