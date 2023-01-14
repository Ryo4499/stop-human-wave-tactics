import { GraphQLAbstractType } from "graphql";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import type { gql } from "graphql-request";
import { Articles } from "../../components/Articles";
import { getArticles } from "../../graphql/getArticles";
import { getArticlesPages } from "../../graphql/getArticlesPages";
import { getClient } from "../../lib/graphqlClient";
import { getI18NLocales } from "../../graphql/getI18NLocales";
import { getPageSize } from "../../lib/pagination";
import useSWR from "swr"
import { request } from "graphql-request"
import { ArticleEntityResponseCollection, GetArticlesPagesQuery, GetArticlesPagesQueryVariables, GetArticlesQuery, GetArticlesQueryVariables, GetI18NLocalesQuery, GetI18NLocalesQueryVariables } from "../../types/apollo_client";

interface PageParams { params: { page: string }, locale: string }

const client = getClient()

export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths: Array<PageParams> = []
    console.log(locales)
    if (locales != null) {
        for (const locale of locales) {
            const variables = { pagination: { pageSize: getPageSize() }, locale: locale }
            console.log(variables)
            await client.request(getArticlesPages, variables).then((data) => {
                console.log(data)
                const pageCount = data.articles?.meta.pagination.pageCount
                if (pageCount != null) {
                    const pages = Array.from({ length: pageCount }, (v, k) => k + 1)
                    for (const page of pages) {
                        paths.push({ params: { page: page.toString() }, locale: locale })
                    }
                }
            }).catch((error) => {
                console.log(error)
                return { paths: paths, fallback: "blocking" }
            })
        }
    }
    console.log(paths)
    return { paths: paths, fallback: "blocking" }
}

type IStaticProps = {
    params: { page: string },
    locale: string
}

export const getStaticProps = async ({ params, locale }: IStaticProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error } = useSWR<ArticleEntityResponseCollection>([getArticles, { pagination: { page: params.page, pageSize: getPageSize() }, locale: locale }])
    console.log(error)
    console.log(params)
    console.log(locale)
    console.log(data)
    if (data) {
        return {
            props: {
                articles: data
            },
            revalidate: 300,
        };

    } else {
        return {
            notFound: true,
            revalidate: 300,
        };
    }
};

const ArticlesPage: NextPage = ({ articles }) => {
    console.log(articles)
    const router = useRouter()
    const [page, setPage] = useState(
        router.query.page === undefined
            ? 1
            : parseInt(router.query.page as string, 10)
    );
    return <Articles page={page} setPage={setPage} articles={articles} ></Articles>;
};

export default ArticlesPage;