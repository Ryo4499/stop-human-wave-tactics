import Header from "../Common/Header";
import Footer from "../Common/Footer";
import React, { ReactNode, useCallback, useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"
import { ParticlesContext } from "../../pages/_app";

const Layout = ({ children }: { children?: ReactNode }) => {
  // load particles
  const { mainParticle } = useContext(ParticlesContext)
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Grid container direction="column">
      {/* @ts-ignore */}
      <Particles
        init={particlesInit}
        params={mainParticle}
      />
      <Grid container>
        <Header />
      </Grid>
      <Grid container sx={{ flexGrow: 1 }}>
        {children}
      </Grid>
      <Grid container>
        <Footer />
      </Grid>
    </Grid >
  );
}
export default Layout