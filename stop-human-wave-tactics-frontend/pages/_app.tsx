import "../styles/globals.css";
import type { GetStaticProps, NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import { useReducer, createContext, useContext } from "react"
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layouts/Layout";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ApolloProvider, useQuery } from "@apollo/client";
import { addApolloState, initializeApollo, useApollo } from "../lib/apollo";
import { GetCategoriesQuery, GetCategoriesQueryVariables } from "../types/apollo_client";
import { getCategories } from "../graphql/getCategories";
import { useLocale } from "../lib/locale";
import DisplayError from "../components/Common/DisplayError";
import Loading from "../components/Common/Loading";

const App: NextPage = ({ Component, pageProps }: AppProps) => {
  const [dark, toggleDark] = useReducer<boolean>((dark: boolean) => { return !dark }, true)
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${dark ? "dark" : "light"})`, { noSsr: true });
  const { locale, locales, t } = useLocale()
  const client = useApollo(pageProps);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          ...(prefersDarkMode === true
            ? {
              divider: "#382934",
              action: {
                active: "#484923",
                hover: "#ddda32",
                selected: "#83f384",
                disabled: "#382934",
                disabledBackground: "#339388",
              },
              background: {
                default: "#888888",
                paper: "#000000",
              },
              text: {
                primary: "#DA59D9",
                secondary: "#FF8F3F",
              },
              typography: {
                fontFamily: [
                  "-apple-system",
                  "BlinkMacSystemFont",
                  '"Segoe UI"',
                  "Roboto",
                  '"Helvetica Neue"',
                  "Arial",
                  "sans-serif",
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"',
                ].join(","),
              },
            }
            : {
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
              typography: {
                fontFamily: [
                  "-apple-system",
                  "BlinkMacSystemFont",
                  '"Segoe UI"',
                  "Roboto",
                  '"Helvetica Neue"',
                  "Arial",
                  "sans-serif",
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"',
                ].join(","),
              },
            }),
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout dark={dark} toggleDark={toggleDark}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
