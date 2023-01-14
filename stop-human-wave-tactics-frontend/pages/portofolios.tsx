import { request } from "graphql-request"
import Grid from "@mui/material/Unstable_Grid2"
import { Typography } from "@mui/material"
import type { NextPage } from "next"
import { getBackendURL } from "../lib/graphqlClient"
import { getCategories } from "../graphql/getCategories"
import { CategoryEntityResponseCollection } from "../types/apollo_client"

type IStaticProps = {
    locales: Array<string>
    locale: string
    defaultLocale: string
}

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const variables = { pagination: {}, locale: locale }
    console.log(variables)
    const result = await request(getBackendURL(), getCategories, variables).then(({ categories }: { categories: CategoryEntityResponseCollection }) => {
        return {
            props: {
                categories: categories
            },
            notFound: false,
            revalidate: 300,
        };
    })
    if (result != null) {
        return result
    } else {
        return {
            notFound: true,
            revalidate: 300
        }
    }
};

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