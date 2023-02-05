import Grid from "@mui/material/Unstable_Grid2";
import { NextPage } from "next"
import { useRouter } from "next/router"
import { request } from "graphql-request"
import { getBackendGraphqlURL } from "../../lib/graphqlClient";
import { ArticleEntity } from "../../types/graphql_res";
import { useContext, useState } from "react";
import Sidebar from "../../components/Common/Sidebar";
import { isMobile } from "react-device-detect";
import { ArticlesCategorisProps, UUIDParams, UUIDStaticProps } from "../../types/general";
import { getCategoriesUUID } from "../../graphql/getCategoriesUUID";
import { Articles } from "../../components/Articles";
import { GraphqlError } from "../../components/Common/DisplayError";
import { getArticlesCategories } from "../../graphql/getArticlesCategories";
import useSWR from "swr"
import Loading from "../../components/Common/Loading";

export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths: Array<UUIDParams> = []
    if (locales != null) {
        for (const locale of locales) {
            const variables = { pagination: {}, locale: locale }
            await request(getBackendGraphqlURL(), getCategoriesUUID, variables).then(({ categories }) => {
                categories.data.map((category: ArticleEntity) => paths.push({ params: { uuid: category.attributes?.uuid }, locale: locale }))
            })
        }
    }
    return { paths: paths, fallback: "blocking" }
}


export const getStaticProps = async ({ params, locale }: UUIDStaticProps) => {
    const variables = {
        filters: {
            category: {
                uuid: { eq: params.uuid }
            }
        },
        pagination: {},
        sort: ["updatedAt:Desc", "publishedAt:Desc"],
        locale: locale
    }
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
const ArticlesPage: NextPage<ArticlesCategorisProps> = ({ articles, categories, variables }) => {
    const { data, error, isLoading } = useSWR([getArticlesCategories, variables], { fallbackData: { articles: articles, categories: categories, variables: variables }, })
    const router = useRouter()
    const [page, setPage] = useState(
        router.query.page === undefined
            ? 1
            : parseInt(router.query.page as string, 10)
    );
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
                        <Articles page={page} setPage={setPage} articles={data.articles} />
                    </Grid>
                </Grid> :
                <Grid
                    container
                    direction="row"
                    sx={{ flexGrow: 1 }}
                >
                    <Grid container xs={10} sx={{ flexGrow: 1 }}>
                        <Articles page={page} setPage={setPage} articles={data.articles} />
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
};

export default ArticlesPage;