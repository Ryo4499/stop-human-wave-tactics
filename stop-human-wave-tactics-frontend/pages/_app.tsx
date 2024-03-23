import "../styles/globals.css";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import React, { createContext, StrictMode, useState, useMemo, useEffect } from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { darkPalette, lightPalette } from "../lib/theme";
import mainParticle from "../styles/presets/basic.json";
import subParticle from "../styles/presets/nyancat2-articles.json";
import { client, getMode } from "../lib/graphqlClient";
import Layout from "../components/Layouts/Layout";
import { loadSlim } from "@tsparticles/slim";
import ParticlesComponents, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { GoogleTagManager } from "@next/third-parties/google";
import { getGtag } from "../lib/google";
import type { PaletteMode } from "@mui/material";

export const ColorModeContext = createContext({ toggleColorMode: () => { } });
export const PageContext = createContext({ page: 1, setPage: (value: number) => { } });
const ParticleContext = createContext({ particle: mainParticle, setParticle: (value: any) => { } })

const PsComponents = () => {
  const { particle } = React.useContext(ParticleContext);
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    })
  }, [particle])
  const particlesLoaded = async (container?: Container): Promise<void> => { }
  return (<ParticlesComponents
    id="tsparticles"
    particlesLoaded={particlesLoaded}
    options={(particle as object)}
  />)
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [mode, setMode] = useState<PaletteMode>("dark");
  const [page, setPage] = useState<number>(router.query.page == null ? 1 : parseInt(router.query.page as string, 10));
  //const [particle, setParticle] = useState<any>(mainParticle);
  //const colorMode = useMemo(
  //  () => ({
  //    toggleColorMode: () => {
  //      setMode((prevMode: PaletteMode): PaletteMode => (prevMode === "light" ? "dark" : "light"));
  //      setParticle((prevParticle: any) => (prevParticle === mainParticle ? subParticle : mainParticle));
  //    },
  //  }),
  //  []
  //);

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
    <StrictMode>
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
        {
          //      <ColorModeContext.Provider value={colorMode}>
          //        <ParticleContext.Provider value={{ particle, setParticle }}>
          //          <ThemeProvider theme={theme}>
          //            <PageContext.Provider value={{ page, setPage }}>
          //              <Layout>
          //                <PsComponents />
          //                <Component {...pageProps} />
          //              </Layout>
          //            </PageContext.Provider>
          //          </ThemeProvider>
          //        </ParticleContext.Provider>
          //      </ColorModeContext.Provider>
        }
        <ThemeProvider theme={theme}>
          <PageContext.Provider value={{ page, setPage }}>
            <Layout>
              <PsComponents />
              <Component {...pageProps} />
            </Layout>
          </PageContext.Provider>
        </ThemeProvider>
        <GoogleTagManager gtmId={`${getGtag()}`} />
      </SWRConfig>
    </StrictMode >
  );
}

export default MyApp;
