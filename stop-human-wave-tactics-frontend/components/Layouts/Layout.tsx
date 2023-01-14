import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
import React, { ReactNode, useCallback } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { isMobile } from "react-device-detect"
import { request } from "graphql-request"
import { useRouter } from "next/router"

const Layout = ({ dark, toggleDark, children }: { dark: boolean, toggleDark: () => void, children?: ReactNode }) => {

  return (
    <Grid container direction="column">
      <Grid container xs={12}>
        <Header dark={dark} toggleDark={toggleDark} />
      </Grid>

      {isMobile ?
        <Grid
          container
          direction="column"
          sx={{ flexGrow: 1 }}
        >
          {children}
        </Grid> :
        <Grid
          container
          direction="row"
          sx={{ flexGrow: 1 }}
        >
          {children}
        </Grid>
      }
      <Grid container xs={12}>
        <Footer />
      </Grid>
    </Grid >
  );
}
export default Layout