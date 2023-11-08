import "../styles/globals.css";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import { createContext, useMemo, useState } from "react";
import React from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { darkPalette, lightPalette } from "../lib/theme";
import mainParticle from "../styles/presets/basic.json";
import subParticle from "../styles/presets/collisions.json";
import { client } from "../lib/graphqlClient";
import Layout from "../components/Layouts/Layout";

export const ParticlesContext = createContext(
  {} as {
    mainParticle: object;
  }
);

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === "dark" ? darkPalette : lightPalette),
        },
      }),
    [mode]
  );

  const fetcher = (query: any, variables: any) =>
    client.request(query, variables);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ParticlesContext.Provider
        value={{ mainParticle: mode === "dark" ? mainParticle : subParticle }}
      >
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher,
            suspense: true,
            errorRetryCount: 3,
            revalidateIfStale: true,
            revalidateOnMount: true,
            shouldRetryOnError: false,
          }}
        >
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </SWRConfig>
      </ParticlesContext.Provider>
    </ColorModeContext.Provider>
  );
};

export default MyApp;
