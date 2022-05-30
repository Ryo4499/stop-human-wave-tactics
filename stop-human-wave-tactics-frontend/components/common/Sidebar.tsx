import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Sidebar() {
    return (
        <Grid container direction="column">
            <Avatar alt="AR44" src="/favicon.ico" sx={{
                width: 0.6, height: 0.8, maxWidth: 0.6, minWidth: 0.2, maxHeight: 0.8, minHeight: 0.2, boxShadow: 5, bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            }} />
            <Typography>test</Typography>
        </Grid>
    )
}
