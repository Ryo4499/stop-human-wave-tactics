import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useLocale } from "../../lib/locale"

export const NotFound = () => {
    const { t } = useLocale()
    return (
        <Grid>
            <Typography >{t.not_found}</Typography>
        </Grid>
    )
}