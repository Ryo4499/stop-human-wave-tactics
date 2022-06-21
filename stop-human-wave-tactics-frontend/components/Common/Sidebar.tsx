import { Avatar, Grid, Typography } from '@mui/material'

export default function Sidebar() {
        return (
                <Grid container direction="column" justifyContent="center" alignContent="stretch">
                        <Grid item>
                                <Avatar alt="AR44" src="/favicon.ico" />
                        </Grid>
                        <Grid item>
                                <Typography>test</Typography>
                        </Grid>
                </Grid>
        )
}
