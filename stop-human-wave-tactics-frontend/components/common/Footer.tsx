import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function ButtonAppBar() {
    return (
        <Grid container justifyContent="center" mt={3}>
            <Typography
                variant="h6"
                component="div"
            >
                Created By Ryo Arai At 2022
            </Typography>
        </Grid>
    );
}
