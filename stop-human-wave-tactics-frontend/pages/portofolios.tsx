import Grid from "@mui/material/Unstable_Grid2"
import { Typography } from "@mui/material"
import type { NextPage } from "next"

const Portofolio: NextPage = () => {
    return (
        <Grid container direction="column" px={4}>
            <Grid>
                <Typography>
                    Tech Map
                </Typography>
                <a href=""></a>
                <ul>
                    使用技術
                    <li>
                        Nuxtjs
                    </li>
                    <li>
                        Flask
                    </li>
                    <li>
                        Docker
                    </li>
                </ul>
            </Grid>
            <Grid>
                <Typography>
                    Bookmemo
                </Typography>
                <a href=""></a>
                <ul>
                    使用技術
                    <li>
                        Spring Boot
                    </li>
                </ul>
            </Grid>
        </Grid>
    )
}

export default Portofolio