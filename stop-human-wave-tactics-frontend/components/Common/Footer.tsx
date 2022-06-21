import { Grid, Typography } from '@mui/material';

export default function ButtonAppBar() {
        return (
                <Grid container={true} justifyContent="center">
                        <Typography
                                variant="h6"
                                component="div"
                        >
                                Created By Ryo Arai At 2022
                        </Typography>
                </Grid>
        );
}
