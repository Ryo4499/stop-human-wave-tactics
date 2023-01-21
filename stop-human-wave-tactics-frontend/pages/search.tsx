import Grid from "@mui/material/Unstable_Grid2"
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { request } from "graphql-request"
import { Articles } from "../components/Articles";
import { getBackendURL } from "../lib/graphqlClient";
import { isMobile } from "react-device-detect";
import Sidebar from "../components/Common/Sidebar";
import { ArticlesCategorisProps, IStaticProps } from "../types/general";
import { NotFound } from "../components/Common/NotFound";
import { getArticlesCategories } from "../graphql/getArticlesCategories";
import useSWR from "swr"
import Loading from "../components/Common/Loading";
import { GraphqlError } from "../components/Common/DisplayError";


export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const variables = { pagination: {}, sort: ["updatedAt:Desc", "publishedAt:Desc"], locale: locale }
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
            revalidate: 300,
        }
        return result
    } else {
        return {
            notFound: true,
            revalidate: 300
        }
    }
};

const ArticlesIndex: NextPage<ArticlesCategorisProps> = ({ articles, categories, variables }) => {
    const { data, error, isLoading } = useSWR([getArticlesCategories, variables], { fallbackData: { articles: articles, categories: categories, variables: variables }, revalidateOnMount: true })
    const router = useRouter()
    const filter = router.query.title != null && typeof router.query.title === "string" ? router.query.title : ""
    const [page, setPage] = useState(
        router.query.page == null
            ? 1
            : parseInt(router.query.page as string, 10)
    )

    if (isLoading) return <Loading />
    if (data != null) {
        const filterArticles = data.articles.data.filter(
            (article) => {
                return article.attributes?.title.includes(filter)
            })

        const filterArticlesCollection = {
            data: filterArticles,
            meta: {
                pagination: {
                    page: 1,
                    pageCount: 1,
                    pageSize: filterArticles.length,
                    total: 1,
                }
            }
        }
        const filterArticlesResponseCollection = Object.assign(data.articles, filterArticlesCollection)
        if (filterArticles.length === 0) {
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
                                <Articles page={page} setPage={setPage} articles={filterArticlesResponseCollection} />
                            </Grid>
                        </>
                        :
                        <>
                            <Grid container xs={10} sx={{ flexGrow: 1 }}>
                                <Articles page={page} setPage={setPage} articles={filterArticlesResponseCollection} />
                            </Grid>
                            <Grid container xs={2} sx={{ flexGrow: 1 }}>
                                <Sidebar categories={data.categories} />
                            </Grid>
                        </>
                    }
                </Grid>)
        }
        else {
            return <NotFound />
        }
    } else {
        return <GraphqlError error={error} />
    }
}

export default ArticlesIndex