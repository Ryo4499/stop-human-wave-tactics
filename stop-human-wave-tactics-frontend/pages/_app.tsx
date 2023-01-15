import "../styles/globals.css";
import type { NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import { createContext, useReducer } from "react"
import React from "react";
import Layout from "../components/Layouts/Layout";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { darkPallete, lightPallete } from "../lib/theme";
import mainParticle from "../styles/presets/basic.json"

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
  return (
    <ParticlesContext.Provider value={{ mainParticle: mainParticle, }}>
      <ThemeProvider theme={theme}>
        <Layout dark={dark} toggleDark={toggleDark} >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider></ParticlesContext.Provider >
  );
}

export default MyApp;
