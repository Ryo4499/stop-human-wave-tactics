import { request } from "graphql-request"
import Grid from "@mui/material/Unstable_Grid2"
import { Link, ListItemText, Typography } from "@mui/material"
import type { NextPage } from "next"
import { getBackendURL } from "../lib/graphqlClient"
import { getCategories } from "../graphql/getCategories"
import { CategoryEntityResponseCollection } from "../types/apollo_client"
import Sidebar from "../components/Common/Sidebar"
import { isMobile } from "react-device-detect"
import { GraphqlError } from "../components/Common/DisplayError"
import { CategoriesResponseProps, IStaticProps } from "../types/general"
import { useCallback, useContext } from "react"
import useSWR from "swr"
import Loading from "../components/Common/Loading"
import { useLocale } from "../lib/locale"

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const variables = { pagination: {}, locale: locale }
    const result = await request(getBackendURL(), getCategories, variables).then(({ categories }: { categories: CategoryEntityResponseCollection }) => {
        return {
            props: {
                categories: categories,
                variables: variables
            },
            notFound: false,
            revalidate: 3600,
        };
    })
    if (result != null) {
        return result
    } else {
        return {
            notFound: true,
            revalidate: 3600
        }
    }
};

const PortofolioContent = () => {
    const { locale, locales, t } = useLocale();
    const bookmemo = "BookMemo"
    const techforward = "TechForward"
    const abount_bookmemo = t.about_bookmemo.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)
    const abount_techforward = t.about_techforward.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)
    const bookmemo_url = "https://google.com"
    const techforward_url = "https://google.com"

    return (
        <Grid container direction="column" px={4} py={2} spacing={3}>
            <Grid spacing={2}>
                <Grid>
                    <Typography color="text.primary" variant="h6">{techforward}</Typography>
                </Grid>
                <Grid>
                    <Typography color="text.secondary" variant="body1">{abount_techforward}</Typography>
                    <Link href={techforward_url} color="text.link">
                        <a target="_blank" rel="noopener noreferrer">{techforward_url}</a>
                    </Link>
                </Grid>
            </Grid>
            <Grid spacing={2}>
                <Grid>
                    <Typography color="text.primary" variant="h6">{bookmemo}</Typography>
                </Grid>
                <Grid>
                    <Typography color="text.secondary" variant="body1">{abount_bookmemo}</Typography>
                    <Link href={bookmemo_url} color="text.link">
                        <a target="_blank" rel="noopener noreferrer">{bookmemo_url}</a>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

const Portofolio: NextPage<CategoriesResponseProps> = ({ categories, variables }) => {
    const { data, error, isLoading } = useSWR([getCategories, variables], { fallbackData: { categories: categories, variables: variables }, })
    if (isLoading) return <Loading />
    if (data != null) {
        return <>
            {isMobile ?
                <Grid
                    container
                    direction="column"
                    sx={{ flexGrow: 1 }}
                >
                    <Grid container p={1.5} xs={12}>
                        <Sidebar categories={data.categories} />
                    </Grid>
                    <Grid container direction="column" p={1.5} xs={12} sx={{ flexGrow: 1 }}>
                        <PortofolioContent />
                    </Grid>
                </Grid> :
                <Grid
                    container
                    direction="row"
                    sx={{ flexGrow: 1 }}
                >
                    <Grid container xs={10} sx={{ flexGrow: 1 }}>
                        <PortofolioContent />
                    </Grid>
                    <Grid container xs={2} sx={{ flexGrow: 1 }}>
                        <Sidebar categories={data.categories} />
                    </Grid>
                </Grid>
            }
        </>
    } else {
        return <GraphqlError error={error} />
    }
}

export default Portofolio