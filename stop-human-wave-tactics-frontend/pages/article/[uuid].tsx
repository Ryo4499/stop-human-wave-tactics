import Grid from "@mui/material/Unstable_Grid2";
import { NextPage } from "next"
import { useRouter } from "next/router"
import { request } from "graphql-request"
import { ArticleDetails } from "../../components/Article"
import { getBackendURL } from "../../lib/graphqlClient";
import { ArticleEntity } from "../../types/apollo_client";
import { getArticlesUUID } from "../../graphql/getArticlesUUID";
import Sidebar from "../../components/Common/Sidebar";
import { isMobile } from "react-device-detect";
import { ArticlesCategorisProps, UUIDParams, UUIDStaticProps } from "../../types/general";
import { getArticlesCategories } from "../../graphql/getArticlesCategories";
import Loading from "../../components/Common/Loading"
import { GraphqlError } from "../../components/Common/DisplayError";
import useSWR from "swr"

export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths: Array<UUIDParams> = []
    if (locales != null) {
        for (const locale of locales) {
            const variables = { pagination: {}, locale: locale }
            await request(getBackendURL(), getArticlesUUID, variables).then(({ articles }) => {
                articles.data.map((article: ArticleEntity) => paths.push({ params: { uuid: article.attributes?.uuid }, locale: locale }))
            })
        }
    }
    return { paths: paths, fallback: "blocking" }
}


export const getStaticProps = async ({ params, locale }: UUIDStaticProps) => {
    const variables = { filters: { uuid: { eq: params.uuid } }, pagination: {}, sort: ["updatedAt:Desc", "publishedAt:Desc"], locale: locale }
    const res = await request(getBackendURL(), getArticlesCategories, variables).then((result) => {
        return result
    })
    if (res != null) {
        const result = {
            props: {
                articles: res.articles,
                categories: res.categories,
                variables: variables,
            },
            notFound: false,
            revalidate: 3600,
        }
        return result
    } else {
        return {
            notFound: true,
            revalidate: 3600
        }
    }
};

const ArticlePage: NextPage<ArticlesCategorisProps> = ({ articles, categories, variables }) => {
    const { data, error, isLoading } = useSWR([getArticlesCategories, variables], { fallbackData: { articles: articles, categories: categories, variables: variables }, })
    const router = useRouter()
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
                        <ArticleDetails articles={data.articles} />
                    </Grid>
                </Grid> :
                <Grid
                    container
                    direction="row"
                    sx={{ flexGrow: 1 }}
                >
                    <Grid container xs={10} sx={{ flexGrow: 1 }}>
                        <ArticleDetails articles={data.articles} />
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

export default ArticlePage