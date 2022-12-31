import "../styles/globals.css";
import { useMediaQuery } from "@mui/material";
import { useState } from "react"
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layouts/Layout";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";

function App({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState<boolean>(true)
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${dark ? "dark" : "light"})`, { noSsr: true });
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
                default: "#000000",
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
        <Layout dark={dark} setDark={setDark}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
