import "../styles/globals.css"
import Layout from "../components/Layouts/Layout";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
        ApolloClient,
        InMemoryCache,
        ApolloProvider,
        useQuery,
        gql
} from "@apollo/client";

const darkTheme = createTheme({
        palette: {
                mode: "dark",
        },
});

const cache = new InMemoryCache()
const client = new ApolloClient({
        uri: `${process.env.BACKEND_URL}/graphql`,
        cache: cache,
});

export default function App({ Component, pageProps }: AppProps) {
        return (
                <ApolloProvider client={client}>
                        <ThemeProvider theme={darkTheme}>
                                <Layout>
                                        <Component {...pageProps} />
                                </Layout>
                        </ThemeProvider>
                </ApolloProvider>
        );
}
