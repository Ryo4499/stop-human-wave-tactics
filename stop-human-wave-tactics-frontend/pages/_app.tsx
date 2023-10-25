import "../styles/globals.css";
import type { NextPage } from "next";
import { SWRConfig } from "swr"
import { client } from "../lib/graphqlClient"
import { createContext, useEffect, useMemo, useState } from "react"
import React from "react";
import Layout from "../components/Layouts/Layout";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import { darkPalette, lightPalette } from "../lib/theme";
import CssBaseline from "@mui/material/CssBaseline";
import mainParticle from "../styles/presets/basic.json"
import subParticle from "../styles/presets/collisions.json"
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag"

export const ParticlesContext = createContext({} as {
  mainParticle: object,
});

export const GoogleTagManager: React.FC<{
}> = () => (
  <Script
    id="gtm"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'G-884NEPFPMMJ');
          `,
    }}
  />
);

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

//export function reportWebVitals(metric: NextWebVitalsMetric) {
//  console.log(metric)
//}

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
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
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ParticlesContext.Provider value={{ mainParticle: mode === "dark" ? mainParticle : subParticle }}>
        <CssBaseline />
        <SWRConfig value={{ fetcher, suspense: true, errorRetryCount: 3, revalidateIfStale: true, revalidateOnMount: true, shouldRetryOnError: false }}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
              />
              <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </Layout>
          </ThemeProvider>
        </SWRConfig >
      </ParticlesContext.Provider >
    </ColorModeContext.Provider>
  );
}

export default MyApp;
