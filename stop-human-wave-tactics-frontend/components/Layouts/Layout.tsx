import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { ReactNode } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <Stack direction="column" alignContent="space-between">
      <Grid justifyContent="center" alignItems="flex-start">
        <Header />
      </Grid>
      <Grid
        contaienr
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        p={1.5}
        sx={{ flexGrow: 1 }}
      >
        <Grid contaienr>
          <Grid contaienr xs={9} md={9}>
            <main>{children}</main>
          </Grid>
          <Grid container xs={9} md={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="flex-end">
        <Footer />
      </Grid>
    </Stack>
  );
}
