import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Unstable_Grid2"
import { useLocale } from "../../lib/locale"

export const NotFound = () => {
    
    const { t } = useLocale()
    return (
        <Grid container direction="column" mx={5} spacing={3} sx={{ backgroundColor: "background.content", my: { md: 0, xs: 2 }, flexGrow: 1 }}>
            <Grid container mx={5} my={2}>
                <Typography variant="h4" color="text.secondary">{t.not_found}</Typography>
            </Grid>
        </Grid>
    )
}