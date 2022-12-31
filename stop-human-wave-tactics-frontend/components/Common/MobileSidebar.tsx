
import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search";
import { useLocale } from "../../lib/locale"

export default function MobileSidebar() {
    const { locale, locales, t } = useLocale();
    return (
        <Grid container direction="column" xs={12}>
            <Grid container justifyContent="stretch" alignItems="center" >
                <TextField id="outlined-basic" label={t.search} variant="outlined" size="small" sx={{ minWidth: "100%" }} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }} />
            </Grid>
        </Grid >
    );
}
