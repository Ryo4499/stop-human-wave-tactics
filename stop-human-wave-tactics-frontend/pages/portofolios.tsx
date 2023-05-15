import Image from 'next/image'
import { request } from "graphql-request"
import Grid from "@mui/material/Unstable_Grid2"
import { Link, Typography } from "@mui/material"
import type { NextPage } from "next"
import { getBackendGraphqlURL } from "../lib/graphqlClient"
import { getCategories } from "../graphql/getCategories"
import { CategoryEntityResponseCollection } from "../types/graphql_res"
import Sidebar from "../components/Common/Sidebar"
import { GraphqlError } from "../components/Common/DisplayError"
import { CategoriesResponseProps, IStaticProps } from "../types/general"
import useSWR from "swr"
import { useLocale } from "../lib/locale"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Meta from "../components/utils/Head"

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const variables = { filters: {}, pagination: {}, locale: locale }
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
    const datsujinkai = "StopHumanWaveTactics"
    const dl = "DeepLearning Demo"
    const about_instance = t.about_instance.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)
    const about_bookmemo = t.about_bookmemo.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)
    const about_dl = t.about_dl.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)
    const about_techforward = t.about_techforward.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)
    const about_datsujinkai = t.about_datsujinkai.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)
    const dl_url = "https://drive.google.com/drive/folders/1Sp22-Pl5kqCWPoTZXENB-cpApb0zNfXh?usp=sharing"
    const bookmemo_url = "https://bookmemo.xyz"
    const techforward_url = "https://techforward.blog"

    return (
        <Grid container direction="column" mx={5} spacing={3} sx={{ backgroundColor: "background.content", my: { md: 0, xs: 2 }, flexGrow: 1 }}>
            <Grid spacing={2}>
                <Grid>
                    <Typography color="text.primary" variant="h6">{datsujinkai}</Typography>
                </Grid>
                <Grid>
                    <Typography color="text.secondary" variant="body1">{about_datsujinkai}</Typography>
                </Grid>
                <Grid>
                    <Typography color="text.secondary" variant="body1">LightHouse Score</Typography>
                    <Image src={"/20230515_lighthouse_score.png"} className="nextimage" fill alt={"lighthouse score"} />
                </Grid>
            </Grid>
            <Grid spacing={2}>
                <Grid>
                    <Typography color="text.primary" variant="h6">{dl}</Typography>
                </Grid>
                <Grid>
                    <Typography color="text.secondary" variant="body1">{about_dl}</Typography>
                </Grid>
            </Grid>
            <Grid spacing={2}>
                <Typography color="text.primary" variant="h5">{about_instance}</Typography>
            </Grid>
            <Grid spacing={2}>
                <Grid>
                    <Typography color="text.primary" variant="h6">{techforward}</Typography>
                </Grid>
                <Grid>
                    <Typography color="text.secondary" variant="body1">{about_techforward}</Typography>
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
                    <Typography color="text.secondary" variant="body1">{about_bookmemo}</Typography>
                    <Link href={bookmemo_url} color="text.link">
                        <a target="_blank" rel="noopener noreferrer">{bookmemo_url}</a>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

const Portofolio: NextPage<CategoriesResponseProps> = ({ categories, variables }) => {
    const { data, error } = useSWR([getCategories, variables], { fallbackData: { categories: categories, variables: variables }, })
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
    if (data != null) {
        return <Grid container sx={{ flexGrow: 1 }}>
            <Meta title="Portfolios Page" description="This page introduce my portfolios." keyword={categories.data.map((value) => value.attributes?.name).join(" ")} />
            <Grid
                container
                direction="row"
                sx={{ flexGrow: 1 }}
            >
                <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
                    <PortofolioContent />
                </Grid>
                <Grid container xs={12} md={2} sx={{ flexGrow: 1 }}>
                    <Sidebar categories={data.categories} />
                </Grid>
            </Grid>
        </Grid>
    } else {
        return <GraphqlError error={error} />
    }
}

export default Portofolio