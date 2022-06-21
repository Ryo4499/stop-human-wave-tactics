import Header from "../Common/Header"
import Footer from "../Common/Footer"
import Sidebar from "../Common/Sidebar"
import React, { ReactElement } from "react"
import { Grid } from "@mui/material"

type LayoutProps = Required<{ readonly children: ReactElement }>

export default function Layout({
        children
}: LayoutProps) {
        return (
                <Grid container direction="column" alignContent="space-between">
                        <Grid container item justifyContent="center" alignItems="flex-start">
                                <Header />
                        </Grid>
                        <Grid container item direction="row" justifyContent="space-around" alignItems="stretch" sx={{ flexGrow: 1 }} p={1.5}>
                                <Grid container item direction="row" justifyContent="space-between" spacing={5}>
                                        <Grid item xs={10} justifyContent="center">
                                                <main>{children}</main>
                                        </Grid>
                                        <Grid item xs={2} justifyContent="center">
                                                <Sidebar />
                                        </Grid>
                                </Grid>
                        </Grid>
                        <Grid container item justifyContent="center" alignItems="flex-end">
                                <Footer />
                        </Grid>
                </Grid>
        )
}
