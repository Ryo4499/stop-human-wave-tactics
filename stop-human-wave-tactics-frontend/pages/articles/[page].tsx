import type { NextPage } from "next";
import Grid from "@mui/material/Unstable_Grid2"
import { useRouter } from "next/router";
import { useState } from "react";
import { request } from "graphql-request"
import { Articles } from "../../components/Articles";
import { getArticlesPages } from "../../graphql/getArticlesPages";
import { getBackendGraphqlURL } from "../../lib/graphqlClient";
import { getPageSize } from "../../lib/pagination";
import { ArticleEntityResponseCollection } from "../../types/graphql_res";
import { GraphqlError } from "../../components/Common/DisplayError";
import Sidebar from "../../components/Common/Sidebar";
import { ArticlesCategorisProps, PageParams, PagesStaticProps } from "../../types/general";
import { getArticlesCategories } from "../../graphql/getArticlesCategories";
import useSWR from "swr"
import Loading from "../../components/Common/Loading";
import Meta from "../../components/utils/Head";


export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths: Array<PageParams> = []
    if (locales != null) {
        for (const locale of locales) {
            const variables = { pagination: { pageSize: getPageSize() }, locale: locale }
            await request(getBackendGraphqlURL(), getArticlesPages, variables).then(({ articles }: { articles: ArticleEntityResponseCollection }) => {
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
    const variables = { pagination: { page: parseInt(params.page, 10), pageSize: getPageSize() }, sort: ["updatedAt:Desc", "publishedAt:Desc"], locale: locale }
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
        return <Grid container sx={{ flexGrow: 1 }}>
            <Meta title="Articles Page" description="This page published articles sorted in descing ordered of the latest modified date." keyword={categories.data.map((value) => value.attributes?.name).join(" ")} />
            <Grid
                container
                direction="row"
                sx={{ flexGrow: 1 }}
            >
                <Grid container xs={12} md={10} sx={{ flexGrow: 1 }}>
                    <Articles page={page} setPage={setPage} articles={data.articles} filter={null} />
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