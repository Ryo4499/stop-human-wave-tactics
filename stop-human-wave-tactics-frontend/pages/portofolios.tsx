import { request } from "graphql-request"
import Grid from "@mui/material/Unstable_Grid2"
import { Typography } from "@mui/material"
import type { NextPage } from "next"
import { getBackendURL } from "../lib/graphqlClient"
import { getCategories } from "../graphql/getCategories"
import { CategoryEntityResponseCollection } from "../types/apollo_client"
import Sidebar from "../components/Common/Sidebar"
import { isMobile } from "react-device-detect"
import { DisplayError } from "../components/Common/DisplayError"
import { CategoriesProps, IStaticProps } from "../types/general"
import { useCallback, useContext } from "react"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import { Engine } from "tsparticles-engine"
import { ParticlesContext } from "./_app"

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const variables = { pagination: {}, locale: locale }
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

const PortofolioContent = () => {
    // load particles
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const { mainParticle } = useContext(ParticlesContext)
    return (
        <Grid container direction="column" px={4}>
            {/* @ts-ignore */}
            <Particles
                init={particlesInit}
                params={mainParticle}
            />
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

const Portofolio: NextPage<CategoriesProps> = ({ categories }) => {
    if (categories) {
        return <>
            {isMobile ?
                <Grid
                    container
                    direction="column"
                    sx={{ flexGrow: 1 }}
                >
                    <Grid container p={1.5} xs={12}>
                        <Sidebar categories={categories} />
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
                        <Sidebar categories={categories} />
                    </Grid>
                </Grid>
            }
        </>
    } else {
        return <DisplayError error={"page"} />
    }
}

export default Portofolio