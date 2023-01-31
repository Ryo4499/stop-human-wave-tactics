import "../styles/globals.css";
import type { NextPage } from "next";
import { SWRConfig } from "swr"
import { client } from "../lib/graphqlClient"
import { useMediaQuery } from "@mui/material";
import { createContext, useReducer } from "react"
import React from "react";
import Layout from "../components/Layouts/Layout";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "../lib/theme";
import CssBaseline from "@mui/material/CssBaseline";
import mainParticle from "../styles/presets/basic.json"
import subParticle from "../styles/presets/collisions.json"

export const ParticlesContext = createContext({} as {
  mainParticle: object,
});

export const DarkContext = createContext({} as { dark: boolean })

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [dark, toggleDark] = useReducer((dark: boolean) => { return !dark }, true)
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${dark ? "dark" : "light"})`, { noSsr: true });
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          ...(prefersDarkMode ? darkPalette : lightPalette)
        },
      }),
    [prefersDarkMode]
  );
  const fetcher = (query: any, variables: any) => client.request(query, variables)
  return (
    <DarkContext.Provider value={{ dark: dark }}>
      <ParticlesContext.Provider value={{ mainParticle: dark ? mainParticle : subParticle }}>
        <CssBaseline />
        <SWRConfig value={{ fetcher, suspense: true, errorRetryCount: 3, revalidateIfStale: true, revalidateOnMount: true, shouldRetryOnError: false }}>
          <ThemeProvider theme={theme}>
            <Layout dark={dark} toggleDark={toggleDark} >
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </SWRConfig >
      </ParticlesContext.Provider >
    </DarkContext.Provider>
  );
}

export default MyApp;
