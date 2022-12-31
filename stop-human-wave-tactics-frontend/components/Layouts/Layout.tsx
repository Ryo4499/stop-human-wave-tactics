import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { ReactNode } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import { BrowserView, MobileView } from "react-device-detect"

export default function Layout({ dark, setDark, children }: { dark: boolean, setDark: (dark: boolean) => void, children?: ReactNode }) {
  return (
    <Grid container direction="row">
      <Grid container item xs={12}>
        <Header dark={dark} setDark={setDark} />
      </Grid>
      <MobileView>
        <Grid
          container
          direction="column"
          sx={{ flexGrow: 1 }}
        >
          <Grid container>
            <Sidebar />
          </Grid>
          <Grid container>
            {children}
          </Grid>
        </Grid>
      </MobileView>
      <BrowserView>
        <Grid
          container
          item
          direction="row"
          sx={{ flexGrow: 1 }}
        >
          <Grid container p={1.5} md={10}>
            {children}
          </Grid>
          <Grid container p={1.5} md={2}>
            <Sidebar />
          </Grid>
        </Grid>
      </BrowserView>
      <Grid container item xs={12}>
        <Footer />
      </Grid>
    </Grid >
  );
}
