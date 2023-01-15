import Grid from "@mui/material/Unstable_Grid2"
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { request } from "graphql-request"
import { Articles } from "../components/Articles";
import { getArticles } from "../graphql/getArticles";
import { getBackendURL, getClient } from "../lib/graphqlClient";
import { getPageSize } from "../lib/pagination";
import { ArticleEntityResponseCollection } from "../types/apollo_client";
import Loading from "../components/Common/Loading";
import { DisplayError } from "../components/Common/DisplayError";
import { isMobile } from "react-device-detect";
import Sidebar from "../components/Common/Sidebar";
import { ArticlesProps, IStaticProps } from "../types/general";
import { getCategories } from "../graphql/getCategories";
import { Categories } from "../components/Category";
import { ParticlesContext } from "./_app";
import { NotFound } from "../components/Common/NotFound";

const client = getClient()

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const articles_variables = { pagination: {}, sort: ["updatedAt:Desc", "publishedAt:Desc"], locale: locale }
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
    const filter = router.query.title != null ? router.query.title : ""
    const { mainParticle } = useContext(ParticlesContext)
    const [page, setPage] = useState(
        router.query.page == null
            ? 1
            : parseInt(router.query.page as string, 10)
    )
    const filterArticles = articles.data.filter(
        (article) => {
            return article.attributes?.title.indexOf(filter) != -1;
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
    const filterArticlesResponseCollection = Object.assign(articles, filterArticlesCollection)
    if (filterArticles.length != 0) {
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
                            <Articles page={page} setPage={setPage} articles={filterArticlesResponseCollection} mainParticle={mainParticle} />
                        </Grid>
                    </>
                    :
                    <>
                        <Grid container xs={10} sx={{ flexGrow: 1 }}>
                            <Articles page={page} setPage={setPage} articles={filterArticlesResponseCollection} mainParticle={mainParticle} />
                        </Grid>
                        <Grid container xs={2} sx={{ flexGrow: 1 }}>
                            <Sidebar categories={categories} />
                        </Grid>
                    </>
                }
            </Grid>)
    } else {
        return <NotFound />
    }
}

export default ArticlesIndex