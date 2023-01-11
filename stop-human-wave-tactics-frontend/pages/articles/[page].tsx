import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Articles } from "../../components/Articles";
import { getArticles } from "../../graphql/getArticles";
import { getArticlesPages } from "../../graphql/getArticlesPages";
import { getI18NLocales } from "../../graphql/getI18NLocales";
import { addApolloState, initializeApollo } from "../../lib/apollo";
import { getPageSize } from "../../lib/pagination";
import { GetArticlesPagesQuery, GetArticlesPagesQueryVariables, GetArticlesQuery, GetArticlesQueryVariables, GetI18NLocalesQuery, GetI18NLocalesQueryVariables } from "../../types/apollo_client";
import chalk from 'chalk';

export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const client = initializeApollo()
    const paths = []
    if (locales != null) {
        for (const locale of locales) {
            const { data } = await client.query<GetArticlesPagesQuery, GetArticlesPagesQueryVariables>({ query: getArticlesPages, variables: { pagination: { pageSize: getPageSize() }, locale: locale } })
            const pageCount = data.articles?.meta.pagination.pageCount
            if (pageCount != null) {
                const pages = Array.from({ length: pageCount }, (v, k) => k + 1)
                for (const page of pages) {
                    paths.push({ params: { page: page.toString() }, locale: locale })
                }
            }
        }
    }
    console.log(chalk.blue(paths));
    return { paths: paths, fallback: "blocking" }
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
                paginaiton: { page: parseInt(params.page, 10), pagesize: getPageSize() },
                locale: locale
            }
        });
        return addApolloState(client, {
            props: {},
            revalidate: 300,
        })
    } catch {
        return {
            notFound: true,
            revalidate: 300,
        };
    }
};

const ArticlesPage: NextPage = () => {
    const router = useRouter()
    const [page, setPage] = useState(
        router.query.page === undefined
            ? 1
            : parseInt(router.query.page as string, 10)
    );
    return <Articles page={page} setPage={setPage} ></Articles>;
};

export default ArticlesPage;