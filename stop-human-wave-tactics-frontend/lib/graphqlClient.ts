import { GraphQLClient } from 'graphql-request';
import HttpsProxyAgent from 'https-proxy-agent';

const options = {
        agent: new HttpsProxyAgent(process.env.HTTP_PROXY)
}
export const getBackendURL = () => process.env.NEXT_PUBLIC_BACKEND_URL || ""
export const getClient = () => new GraphQLClient(getBackendURL(), options);