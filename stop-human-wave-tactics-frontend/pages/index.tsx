import Grid from "@mui/material/Unstable_Grid2"
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { request } from "graphql-request"
import { Articles } from "../components/Articles";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import { getPageSize } from "../lib/pagination";
import Loading from "../components/Common/Loading";
import { GraphqlError } from "../components/Common/DisplayError";
import { isMobile } from "react-device-detect";
import Sidebar from "../components/Common/Sidebar";
import { ArticlesCategorisProps, IStaticProps } from "../types/general";
import { getArticlesCategories } from "../graphql/getArticlesCategories";
import useSWR from "swr"

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const variables = { filters: {}, pagination: { page: 1, pageSize: getPageSize() }, sort: ["updatedAt:Desc", "publishedAt:Desc"], locale: locale }
    const res = await request(getBackendGraphqlURL(), getArticlesCategories, variables).then((result) => {
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

const ArticlesIndex: NextPage<ArticlesCategorisProps> = ({ articles, categories, variables }) => {
    const { data, error, isLoading } = useSWR([getArticlesCategories, variables], { fallbackData: { articles: articles, categories: categories }, })
    const router = useRouter()
    const [page, setPage] = useState(
        router.query.page == null
            ? 1
            : parseInt(router.query.page as string, 10)
    )
    if (isLoading) return <Loading />
    if (data != null) {
        return (
            <Grid
                container
                direction="row"
                sx={{ flexGrow: 1 }}
            >
                {isMobile ?
                    <>
                        <Grid container xs={12} sx={{ flexGrow: 1 }}>
                            <Sidebar categories={data.categories} />
                        </Grid>
                        <Grid container direction="column" xs={12} sx={{ flexGrow: 1 }}>
                            <Articles page={page} setPage={setPage} articles={data.articles} />
                        </Grid>
                    </>
                    :
                    <>
                        <Grid container xs={10} sx={{ flexGrow: 1 }}>
                            <Articles page={page} setPage={setPage} articles={data.articles} />
                        </Grid>
                        <Grid container xs={2} sx={{ flexGrow: 1 }}>
                            <Sidebar categories={data.categories} />
                        </Grid>
                    </>
                }
            </Grid>)
    } else {
        return <GraphqlError error={error} />
    }
}

export default ArticlesIndex