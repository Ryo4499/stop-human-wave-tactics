import Grid from "@mui/material/Unstable_Grid2";
import { NextPage } from "next"
import { request } from "graphql-request"
import { ArticleDetails } from "../../components/Article"
import { getBackendGraphqlURL } from "../../lib/graphqlClient";
import { ArticleEntity } from "../../types/graphql_res";
import { getArticlesUUID } from "../../graphql/getArticlesUUID";
import Sidebar from "../../components/Common/Sidebar";
import { ArticlesCategorisProps, UUIDParams, UUIDStaticProps } from "../../types/general";
import { getArticlesCategories } from "../../graphql/getArticlesCategories";
import Loading from "../../components/Common/Loading"
import { GraphqlError } from "../../components/Common/DisplayError";
import useSWR from "swr"
import Meta from "../../components/utils/Head";

export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths: Array<UUIDParams> = []
    if (locales != null) {
        for (const locale of locales) {
            const variables = { pagination: {}, locale: locale }
            await request(getBackendGraphqlURL(), getArticlesUUID, variables).then(({ articles }) => {
                articles.data.map((article: ArticleEntity) => paths.push({ params: { uuid: article.attributes?.uuid }, locale: locale }))
            })
        }
    }
    return { paths: paths, fallback: "blocking" }
}


export const getStaticProps = async ({ params, locale }: UUIDStaticProps) => {
    const variables = { filters: { uuid: { eq: params.uuid } }, pagination: {}, sort: ["updatedAt:Desc", "publishedAt:Desc"], locale: locale }
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

const ArticlePage: NextPage<ArticlesCategorisProps> = ({ articles, categories, variables }) => {
    const { data, error, isLoading } = useSWR([getArticlesCategories, variables], { fallbackData: { articles: articles, categories: categories, variables: variables }, })
    if (isLoading) return <Loading />
    if (data != null) {
        return <Grid container sx={{ flexGrow: 1 }}>
            <Meta title="Article Details Page" description="This page published article details." keyword={categories.data.map((value) => value.attributes?.name).join(" ")} />
            <Grid
                container
                direction="row"
            >
                <Grid container xs={12} md={10}>
                    <ArticleDetails articles={data.articles} />
                </Grid>
                <Grid container xs={12} md={2}>
                    <Sidebar categories={data.categories} />
                </Grid>
            </Grid>
        </Grid>
    } else {
        return <GraphqlError error={error} />
    }
}

export default ArticlePage