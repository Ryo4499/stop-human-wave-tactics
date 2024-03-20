import "../styles/globals.css";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import React, { createContext, useMemo, useState, useEffect } from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { darkPalette, lightPalette } from "../lib/theme";
import CircularProgress from '@mui/material/CircularProgress';
import mainParticle from "../styles/presets/basic.json";
import subParticle from "../styles/presets/collisions.json";
import { client, getMode } from "../lib/graphqlClient";
import Layout from "../components/Layouts/Layout";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { GoogleTagManager } from "@next/third-parties/google";
import { getGtag } from "../lib/google";
import type { PaletteMode } from "@mui/material";

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  // first load state
  const [init, setInit] = useState(false);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode): PaletteMode => (prevMode === "light" ? "dark" : "light"));
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
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
  }
  const options = mode.toString() === "dark" ? JSON.stringify(mainParticle) : JSON.stringify(subParticle)

  if (!init) {
    return <CircularProgress />
  } else {
    return (
      <ColorModeContext.Provider value={colorMode}>
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
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={JSON.parse(options)}
            />
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {
              getMode() === "PRODUCTION" && <GoogleTagManager gtmId={`${getGtag()}`} />
            }
          </ThemeProvider>
        </SWRConfig>
      </ColorModeContext.Provider>
    );
  }
};

export default MyApp;
