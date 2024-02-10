import Header from "../Common/Header";
import Footer from "../Common/Footer";
import React, { ReactNode } from "react";
import Grid from "@mui/material/Unstable_Grid2";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <Grid container direction="column" sx={{ minHeight: "100%", height: "fit-content" }}>
      <Grid container>
        <Header />
      </Grid>
      <Grid container xs={12} direction="row" sx={{ flexGrow: 1 }}>
        {children}
      </Grid>
      <Grid container>
        <Footer />
      </Grid>
    </Grid >
  );
}
export default Layout