import "../styles/globals.css";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import {
  createContext,
  StrictMode,
  useState,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "../lib/theme";
import mainParticle from "../styles/presets/basic.json";
import { client } from "../lib/graphqlClient";
import Layout from "../components/Layouts/Layout";
import { loadSlim } from "@tsparticles/slim";
import ParticlesComponents, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { GoogleTagManager } from "@next/third-parties/google";
import { getGtmId } from "../lib/google";
import type { PaletteMode } from "@mui/material";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const PageContext = createContext({
  page: 1,
  setPage: (value: number) => {},
});
const ParticleContext = createContext({
  particle: mainParticle,
  setParticle: (value: any) => {},
});

const PsComponents = () => {
  const { particle } = useContext(ParticleContext);
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    });
  }, [particle]);
  const particlesLoaded = async (container?: Container): Promise<void> => {};
  return (
    <ParticlesComponents
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={particle as object}
    />
  );
};

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [mode, setMode] = useState<PaletteMode>("dark");
  const [page, setPage] = useState<number>(
    router.query.page == null ? 1 : parseInt(router.query.page as string, 10),
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === "dark" ? darkPalette : lightPalette),
        },
      }),
    [mode],
  );
  theme.typography.h4 = {
    fontSize: "2.125rem",
    fontWeight: 400,
    fontFamily: "Roboto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  };
  theme.typography.h5 = {
    fontSize: "1.5rem",
    fontWeight: 400,
    fontFamily: "Roboto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  };

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
        <ThemeProvider theme={theme}>
          <PageContext.Provider value={{ page, setPage }}>
            <Layout>
              <PsComponents />
              <Component {...pageProps} />
            </Layout>
          </PageContext.Provider>
        </ThemeProvider>
        <GoogleTagManager gtmId={`${getGtmId()}`} />
      </SWRConfig>
    </StrictMode>
  );
};

export default MyApp;
