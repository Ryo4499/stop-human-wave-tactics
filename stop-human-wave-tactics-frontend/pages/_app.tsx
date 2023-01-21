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
import { darkPallete, lightPallete } from "../lib/theme";
import mainParticle from "../styles/presets/basic.json"
import subParticle from "../styles/presets/collisions.json"

export const ParticlesContext = createContext({} as {
  mainParticle: object,
});

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [dark, toggleDark] = useReducer((dark: boolean) => { return !dark }, true)
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${dark ? "dark" : "light"})`, { noSsr: true });
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
  const fetcher = (query: any, variables: any) => client.request(query, variables)
  return (
    <ParticlesContext.Provider value={{ mainParticle: dark ? mainParticle : subParticle }}>
      <SWRConfig value={{ fetcher }}>
        <ThemeProvider theme={theme}>
          <Layout dark={dark} toggleDark={toggleDark} >
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SWRConfig >
    </ParticlesContext.Provider >
  );
}

export default MyApp;
