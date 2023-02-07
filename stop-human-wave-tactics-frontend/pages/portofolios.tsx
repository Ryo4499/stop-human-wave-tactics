import { request } from "graphql-request"
import Grid from "@mui/material/Unstable_Grid2"
import { Link, Typography } from "@mui/material"
import type { NextPage } from "next"
import { getBackendGraphqlURL } from "../lib/graphqlClient"
import { getCategories } from "../graphql/getCategories"
import { CategoryEntityResponseCollection } from "../types/graphql_res"
import Sidebar from "../components/Common/Sidebar"
import { isMobile } from "react-device-detect"
import { GraphqlError } from "../components/Common/DisplayError"
import { CategoriesResponseProps, IStaticProps } from "../types/general"
import useSWR from "swr"
import Loading from "../components/Common/Loading"
import { useLocale } from "../lib/locale"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Meta from "../components/utils/Head"

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const variables = { pagination: {}, locale: locale }
    const result = await request(getBackendGraphqlURL(), getCategories, variables).then(({ categories }: { categories: CategoryEntityResponseCollection }) => {
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
    const router = useRouter()
    useEffect(() => {
        router.beforePopState(({ as }) => {
            if (as !== router.asPath) {
                // Will run when leaving the current page; on back/forward actions
                // Add your logic here, like toggling the modal state
            }
            return true;
        });

        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);
    if (isLoading) return <Loading />
    if (data != null) {
        return <Grid container sx={{ flexGrow: 1 }}>
            <Meta title="Portfolios Page" description="This page introduce my portfolios." keyword={categories.data.map((value) => value.attributes?.name).join(" ")} />
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
        </Grid>
    } else {
        return <GraphqlError error={error} />
    }
}

export default Portofolio