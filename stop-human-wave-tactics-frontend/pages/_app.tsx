import "../styles/globals.css"
import { useMediaQuery } from "@mui/material";
import React from "react"
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

const cache = new InMemoryCache()
const client = new ApolloClient({
        uri: `${process.env.BACKEND_URL}/graphql`,
        cache: cache,
});

export default function App({ Component, pageProps }: AppProps) {
        const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

        const theme = React.useMemo(
                () =>
                        createTheme({
                                palette: {
                                        mode: prefersDarkMode ? 'dark' : 'light',
                                        ...(prefersDarkMode === true ? {
                                                divider: "#383838",
                                                action: {
                                                        active: "#484923",
                                                        hover: "#ddda32",
                                                        selected: "#83f384",
                                                        disabled: "#382934",
                                                        disabledBackground: "#339388",
                                                },
                                                background: {
                                                        default: "#000000",
                                                        paper: "#000000",
                                                },
                                                text: {
                                                        primary: "#DA59D9",
                                                        secondary: "#FF8F3F",
                                                },
                                        } : {
                                                divider: "#383838",
                                                action: {
                                                        active: "#484923",
                                                        hover: "#ddda32",
                                                        selected: "#83f384",
                                                        disabled: "#382934",
                                                        disabledBackground: "#339388",
                                                },
                                                background: {
                                                        default: "#ffffff",
                                                        paper: "#fffff8",
                                                },
                                                text: {
                                                        primary: "#000000",
                                                        secondary: "#842900",
                                                },
                                        })
                                },
                        }),
                [prefersDarkMode],
        );

        return (
                <ApolloProvider client={client}>
                        <ThemeProvider theme={theme}>
                                <Layout>
                                        <Component {...pageProps} />
                                </Layout>
                        </ThemeProvider>
                </ApolloProvider>
        );
}
