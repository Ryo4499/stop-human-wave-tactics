import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

export default function ButtonAppBar() {
    return (
        <Paper sx={{ position: "static", bottom: 0, left: 0, right: 0, mt: 3 }}>
            <BottomNavigation>
                <Typography
                    variant="h6"
                    component="div"
                >
                    Created By Ryo Arai At 2022
                </Typography>
            </BottomNavigation>
        </Paper>
    );
}
