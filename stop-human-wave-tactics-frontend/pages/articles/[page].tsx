import { GraphQLAbstractType } from "graphql";
import type { GetStaticProps, NextPage } from "next";
import Grid from "@mui/material/Unstable_Grid2"
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { request } from "graphql-request"
import { Articles } from "../../components/Articles";
import { getArticles } from "../../graphql/getArticles";
import { getArticlesPages } from "../../graphql/getArticlesPages";
import { getBackendURL, getClient } from "../../lib/graphqlClient";
import { getPageSize } from "../../lib/pagination";
import { ArticleEntityResponseCollection } from "../../types/apollo_client";
import { DisplayError } from "../../components/Common/DisplayError";
import Sidebar from "../../components/Common/Sidebar";
import { isMobile } from "react-device-detect";
import { ArticlesProps, PageParams, PagesStaticProps } from "../../types/general";
import { getCategories } from "../../graphql/getCategories";
import { ParticlesContext } from "../_app";

const client = getClient()

export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths: Array<PageParams> = []
    if (locales != null) {
        for (const locale of locales) {
            const variables = { pagination: { pageSize: getPageSize() }, locale: locale }
            await request(getBackendURL(), getArticlesPages, variables).then(({ articles }: { articles: ArticleEntityResponseCollection }) => {
                const pageCount = articles?.meta.pagination.pageCount
                if (pageCount != null) {
                    const pages = Array.from({ length: pageCount }, (v, k) => k + 1)
                    for (const page of pages) {
                        // numberだとStaticPathできない
                        paths.push({ params: { page: page.toString() }, locale: locale })
                    }
                }
            })
        }
    }
    return { paths: paths, fallback: "blocking" }
}

export const getStaticProps = async ({ params, locale }: PagesStaticProps) => {
    const articles_variables = { pagination: { page: parseInt(params.page, 10), pageSize: getPageSize() }, sort: ["updatedAt:Desc", "publishedAt:Desc"], locale: locale }
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


const ArticlesPage: NextPage<ArticlesProps> = ({ articles, categories }) => {
    const router = useRouter()
    const { mainParticle } = useContext(ParticlesContext)
    const [page, setPage] = useState(
        router.query.page === undefined
            ? 1
            : parseInt(router.query.page as string, 10)
    );
    if (articles) {
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
                        <Articles page={page} setPage={setPage} articles={articles} mainParticle={mainParticle} />
                    </Grid>
                </Grid> :
                <Grid
                    container
                    direction="row"
                    sx={{ flexGrow: 1 }}
                >
                    <Grid container xs={10} sx={{ flexGrow: 1 }}>
                        <Articles page={page} setPage={setPage} articles={articles} mainParticle={mainParticle} />
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
};

export default ArticlesPage;