import { GraphQLAbstractType } from "graphql";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import type { gql } from "graphql-request";
import { request } from "graphql-request"
import { Articles } from "../../components/Articles";
import { getArticles } from "../../graphql/getArticles";
import { getArticlesPages } from "../../graphql/getArticlesPages";
import { getBackendURL, getClient, getProxyURL } from "../../lib/graphqlClient";
import { getI18NLocales } from "../../graphql/getI18NLocales";
import { getPageSize } from "../../lib/pagination";
import useSWR from "swr"
import { ArticleEntityResponseCollection, GetArticlesPagesQuery, GetArticlesPagesQueryVariables, GetArticlesQuery, GetArticlesQueryVariables, GetI18NLocalesQuery, GetI18NLocalesQueryVariables } from "../../types/apollo_client";
import Loading from "../../components/Common/Loading";
import { Console } from "console";
import { DisplayError } from "../../components/Common/DisplayError";

interface PageParams { params: { page: string }, locale: string }

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

type IStaticProps = {
    params: { page: string },
    locale: string
}

export const getStaticProps = async ({ params, locale }: IStaticProps) => {
    const variables = { pagination: { page: parseInt(params.page, 10), pageSize: getPageSize() }, locale: locale }
    const result = await request(getBackendURL(), getArticles, variables).then(({ articles }: { articles: ArticleEntityResponseCollection }) => {
        return {
            props: {
                articles: articles
            },
            notFound: false,
            revalidate: 300,
        };
    })
    if (result != null) {
        return result
    } else {
        return {
            notFound: true,
            revalidate: 300
        }
    }
};

interface ArticlesProps {
    articles: ArticleEntityResponseCollection
}

const ArticlesPage: NextPage<ArticlesProps> = ({ articles }) => {
    const router = useRouter()
    const [page, setPage] = useState(
        router.query.page === undefined
            ? 1
            : parseInt(router.query.page as string, 10)
    );
    if (articles) {
        return <Articles page={page} setPage={setPage} articles={articles} ></Articles>;
    } else {
        return <DisplayError error={"page"} />
    }
};

export default ArticlesPage;