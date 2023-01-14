import Header from "../Common/Header";
import Footer from "../Common/Footer";
import React, { ReactNode, useCallback } from "react";
import Grid from "@mui/material/Unstable_Grid2";

const Layout = ({ dark, toggleDark, children }: { dark: boolean, toggleDark: () => void, children?: ReactNode }) => {

  return (
    <Grid container direction="column">
      <Grid container xs={12}>
        <Header dark={dark} toggleDark={toggleDark} />
      </Grid>
      {children}
      <Grid container xs={12}>
        <Footer />
      </Grid>
    </Grid >
  );
}
export default Layout