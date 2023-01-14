import Grid from "@mui/material/Unstable_Grid2"
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { request } from "graphql-request"
import { Articles } from "../components/Articles";
import { getArticles } from "../graphql/getArticles";
import { getBackendURL, getClient, getProxyURL } from "../lib/graphqlClient";
import { getPageSize } from "../lib/pagination";
import { ArticleEntityResponseCollection } from "../types/apollo_client";
import Loading from "../components/Common/Loading";
import { DisplayError } from "../components/Common/DisplayError";
import { isMobile } from "react-device-detect";
import Sidebar from "../components/Common/Sidebar";
import { ArticlesProps, IStaticProps } from "../types/general";
import { getCategories } from "../graphql/getCategories";
import { Categories } from "../components/Category";

const client = getClient()

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const articles_variables = { pagination: { pageSize: getPageSize() }, locale: locale }
    const categories_variables = { pagination: {}, locale: locale }
    const categoriws_result = await request(getBackendURL(), getCategories, categories_variables).then(({ categories }) => {
        return categories

    })
    const articles_result = await request(getBackendURL(), getArticles, articles_variables).then(({ articles }) => {
        return articles
    })
    if (articles_result != null && categoriws_result != null) {
        const result = {
            props: {
                articles: articles_result,
                categories: categoriws_result
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

const ArticlesIndex: NextPage<ArticlesProps> = ({ articles, categories }) => {
    const router = useRouter()
    const [page, setPage] = useState(
        router.query.page == null
            ? 1
            : parseInt(router.query.page as string, 10)
    )
    if (articles) {
        return (
            <Grid
                container
                direction="row"
                sx={{ flexGrow: 1 }}
            >
                {isMobile ?
                    <>
                        <Grid container xs={12} sx={{ flexGrow: 1 }}>
                            <Sidebar categories={categories} />
                        </Grid>
                        <Grid container direction="column" xs={12} sx={{ flexGrow: 1 }}>
                            <Articles page={page} setPage={setPage} articles={articles} />
                        </Grid>
                    </>
                    :
                    <>
                        <Grid container xs={10} sx={{ flexGrow: 1 }}>
                            <Articles page={page} setPage={setPage} articles={articles} />
                        </Grid>
                        <Grid container xs={2} sx={{ flexGrow: 1 }}>
                            <Sidebar categories={categories} />
                        </Grid>
                    </>
                }
            </Grid>)
    } else {
        return <DisplayError error={"page"} />
    }
}

export default ArticlesIndex