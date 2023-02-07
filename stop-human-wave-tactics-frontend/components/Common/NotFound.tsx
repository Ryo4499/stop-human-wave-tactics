import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useLocale } from "../../lib/locale"

export const NotFound = () => {
    const { t } = useLocale()
    return (
        <Grid container direction="column" sx={{ flexGrow: 1, backgroundColor: "background.content" }} m={2}>
            <Grid container mx={5}>
                <Typography variant="h4" color="text.primary">{t.not_found}</Typography>
            </Grid>
        </Grid>
    )
}