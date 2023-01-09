import type { GetStaticProps } from "next";
import { getArticles } from "../../graphql/getArticles";
import { getArticlesPages } from "../../graphql/getArticlesPages";
import { getI18NLocales } from "../../graphql/getI18NLocales";
import { initializeApollo } from "../../lib/apollo";
import { getPageSize } from "../../lib/pagination";
import { GetArticlesPagesQuery, GetArticlesPagesQueryVariables, GetArticlesQuery, GetArticlesQueryVariables, GetI18NLocalesQuery, GetI18NLocalesQueryVariables } from "../../types/apollo_client";

export { default } from "./index";

export const getStaticPaths = async () => {
    const client = initializeApollo()
    const paths = []
    try {
        const locale_res = await client.query<GetI18NLocalesQuery, GetI18NLocalesQueryVariables>({
            query: getI18NLocales
        })
        const locales = locale_res.data.i18NLocales?.data.map((locale) => locale.attributes?.code)
        if (locales != null) {
            for (const locale of locales) {
                const { data } = await client.query<GetArticlesPagesQuery, GetArticlesPagesQueryVariables>({ query: getArticlesPages, variables: { pagination: { pageSize: getPageSize() }, locale: locale } })
                if (data.articles?.meta.pagination.pageCount != null) {
                    const pages = Array.from({ length: data.articles?.meta.pagination.pageCount }, (v, k) => k + 1)
                    console.warn(pages)
                    if (pages != null) {
                        for (const page of pages) {
                            paths.push(({ params: { page: page }, locale }))
                        }
                    }
                }
            }
        }
        return { paths: paths, fallback: "blocking" }
    } catch {
        return { paths: [], fallback: "blocking" }
    }
}

type IStaticProps = {
    params: { page: string },
    locale: string
}

export const getStaticProps = async ({ params, locale }: IStaticProps) => {
    const client = initializeApollo()
    try {
        const { data } = await client.query({
            query: getArticles,
            variables: {
                paginaiton: { page: params.page, pagesize: process.env.PAGESIZE },
                locale: locale
            }
        });
        return {
            props: {
                articles: data,

            },
            revalidate: 1,
        }
    } catch {
        return {
            notFound: true,
        };
    }
};