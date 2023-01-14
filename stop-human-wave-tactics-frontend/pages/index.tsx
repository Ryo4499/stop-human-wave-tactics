import { GraphQLAbstractType } from "graphql";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import type { gql } from "graphql-request";
import { request } from "graphql-request"
import { Articles } from "../components/Articles";
import { getArticles } from "../graphql/getArticles";
import { getArticlesPages } from "../graphql/getArticlesPages";
import { getBackendURL, getClient, getProxyURL } from "../lib/graphqlClient";
import { getI18NLocales } from "../graphql/getI18NLocales";
import { getPageSize } from "../lib/pagination";
import useSWR from "swr"
import { ArticleEntityResponseCollection, GetArticlesPagesQuery, GetArticlesPagesQueryVariables, GetArticlesQuery, GetArticlesQueryVariables, GetI18NLocalesQuery, GetI18NLocalesQueryVariables } from "../types/apollo_client";
import Loading from "../components/Common/Loading";
import { DisplayError } from "../components/Common/DisplayError";

interface PageParams { locale: string }

const client = getClient()

type IStaticProps = { locales: Array<string>
    locale: string
    defaultLocale: string
}

export const getStaticProps = async ({ locales, locale, defaultLocale }: IStaticProps) => {
    const variables = { pagination: { page: 1, pageSize: getPageSize() }, locale: locale }
    console.log(variables)
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

const ArticlesIndex: NextPage<ArticlesProps> = ({ articles }) => {
    const router = useRouter()
    const [page, setPage] = useState(
        router.query.page == null
            ? 1
            : parseInt(router.query.page as string, 10)
    )
    if (articles) {
        return <Articles page={page} setPage={setPage} articles={articles} />
    } else {
        return <DisplayError error={"page"} />
    }
}

export default ArticlesIndex