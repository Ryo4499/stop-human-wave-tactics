import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { ReactNode } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import { isMobile } from "react-device-detect"
import { useState, useEffect } from "react"
import MobileSidebar from "../Common/MobileSidebar";

export default function Layout({ dark, setDark, children }: { dark: boolean, setDark: (dark: boolean) => void, children?: ReactNode }) {
  return (
    <Grid container direction="column">
      <Grid container xs={12}>
        <Header dark={dark} setDark={setDark} />
      </Grid>
      {isMobile ?
        <Grid
          container
          direction="column"
          sx={{ flexGrow: 1 }}
        >
          <Grid container p={1.5} xs={12}>
            <MobileSidebar />
          </Grid>
          <Grid container direction="column" p={1.5} xs={12} sx={{ flexGrow: 1 }}>
            {children}
          </Grid>
        </Grid> :
        <Grid
          container
          direction="row"
          sx={{ flexGrow: 1 }}
        >
          <Grid container p={1.5} md={10}>
            {children}
          </Grid>
          <Grid container p={1.5} md={2}>
            <Sidebar />
          </Grid>
        </Grid>}
      <Grid container xs={12}>
        <Footer />
      </Grid>
    </Grid >
  );
}
