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

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === "dark" ? darkPalette : lightPalette)
        },
      }),
    [mode]
  );
  const fetcher = (query: any, variables: any) => client.request(query, variables)
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ParticlesContext.Provider value={{ mainParticle: mode === "dark" ? mainParticle : subParticle }}>
        <CssBaseline />
        <SWRConfig value={{ fetcher, suspense: true, errorRetryCount: 3, revalidateIfStale: true, revalidateOnMount: true, shouldRetryOnError: false }}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </SWRConfig >
      </ParticlesContext.Provider >
    </ColorModeContext.Provider>
  );
}

export default MyApp;
