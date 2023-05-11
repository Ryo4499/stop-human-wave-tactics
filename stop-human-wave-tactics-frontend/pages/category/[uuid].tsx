import Grid from "@mui/material/Unstable_Grid2";
import { NextPage } from "next"
import { useRouter } from "next/router"
import { request } from "graphql-request"
import { getBackendGraphqlURL } from "../../lib/graphqlClient";
import { ArticleEntity } from "../../types/graphql_res";
import { useState } from "react";
import Sidebar from "../../components/Common/Sidebar";
import { ArticlesCategorisProps, UUIDParams, UUIDStaticProps } from "../../types/general";
import { getCategoriesUUID } from "../../graphql/getCategoriesUUID";
import { Articles } from "../../components/Articles";
import { GraphqlError } from "../../components/Common/DisplayError";
import { getArticlesCategories } from "../../graphql/getArticlesCategories";
import useSWR from "swr"
import Meta from "../../components/utils/Head";

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
    const { data, error, } = useSWR([getArticlesCategories, variables], { fallbackData: { articles: articles, categories: categories, variables: variables }, })
    const router = useRouter()
    const [page, setPage] = useState(
        router.query.page === undefined
            ? 1
            : parseInt(router.query.page as string, 10)
    );
    if (data != null && typeof router.query.name === "string") {
        return <Grid container sx={{ flexGrow: 1 }}>
            <Meta title="Searched articles by category name" description="This page published articles searched by category name." keyword={categories.data.map((value) => value.attributes?.name).join(" ")} />
            <Grid
                container
                direction="row"
                sx={{ flexGrow: 1 }}
            >
                <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
                    <Articles page={page} setPage={setPage} articles={data.articles} filter={router.query.name} />
                </Grid>
                <Grid container xs={12} md={2} sx={{ flexGrow: 1 }}>
                    <Sidebar categories={data.categories} />
                </Grid>
            </Grid>
        </Grid>
    } else {
        return <GraphqlError error={error} />
    }
};

export default ArticlesPage;