import Grid from "@mui/material/Unstable_Grid2";
import { NextPage } from "next"
import { useRouter } from "next/router"
import { request } from "graphql-request"
import { getBackendURL } from "../../lib/graphqlClient";
import { ArticleEntity, ArticleEntityResponseCollection } from "../../types/apollo_client";
import { useState } from "react";
import { getArticles } from "../../graphql/getArticles";
import Sidebar from "../../components/Common/Sidebar";
import { isMobile } from "react-device-detect";
import { ArticlesProps, UUIDParams, UUIDStaticProps } from "../../types/general";
import { getCategories } from "../../graphql/getCategories";
import { getCategoriesUUID } from "../../graphql/getCategoriesUUID";
import { Articles } from "../../components/Articles";
import { DisplayError } from "../../components/Common/DisplayError";

export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths: Array<UUIDParams> = []
    if (locales != null) {
        for (const locale of locales) {
            const variables = { pagination: {}, locale: locale }
            await request(getBackendURL(), getCategoriesUUID, variables).then(({ categories }) => {
                categories.data.map((category: ArticleEntity) => paths.push({ params: { uuid: category.attributes?.uuid }, locale: locale }))
            })
        }
    }
    return { paths: paths, fallback: "blocking" }
}


export const getStaticProps = async ({ params, locale }: UUIDStaticProps) => {
    const articles_variables = {
        filters: {
            category: {
                uuid: { eq: params.uuid }
            }
        },
        pagination: {},
        locale: locale
    }
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
                        <Articles page={page} setPage={setPage} articles={articles} />
                    </Grid>
                </Grid> :
                <Grid
                    container
                    direction="row"
                    sx={{ flexGrow: 1 }}
                >
                    <Grid container xs={10} sx={{ flexGrow: 1 }}>
                        <Articles page={page} setPage={setPage} articles={articles} />
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