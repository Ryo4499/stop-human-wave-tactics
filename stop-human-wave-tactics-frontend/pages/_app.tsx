import "../styles/globals.css";
import type { NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import { useReducer } from "react"
import React from "react";
import Layout from "../components/Layouts/Layout";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";
import { useLocale } from "../lib/locale";
import { darkPallete, lightPallete } from "../lib/theme";

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [dark, toggleDark] = useReducer((dark: boolean) => { return !dark }, true)
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${dark ? "dark" : "light"})`, { noSsr: true });
  const { locale, locales, t } = useLocale()
  const client = useApollo(pageProps);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          ...(prefersDarkMode === true
            ? darkPallete : lightPallete)
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout dark={dark} toggleDark={toggleDark} >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
