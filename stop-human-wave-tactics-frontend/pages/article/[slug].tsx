import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import { addApolloState, initializeApollo } from "../../lib/apollo";
import { getArticle } from "../../graphql/getArticle";
import { getArticles } from "../../graphql/getArticles";
import { ArticleDetails } from "../../components/Article/ArticleDetails";
import DisplayError from "../../components/Common/DisplayError";
import { useLocale } from "../../lib/locale";
import { useRouter } from "next/router"
import { ArticleEntity, ArticleEntityResponseCollection, GetArticleQuery, GetArticleQueryVariables, GetArticlesSlugsQuery, GetArticlesQuery, GetArticlesQueryVariables, GetArticlesSlugsQueryVariables, GetI18NLocalesQuery, GetI18NLocalesQueryVariables } from "../../types/apollo_client";
import { getI18NLocales } from "../../graphql/getI18NLocales";
import chalk from "chalk";
import React from "react";
import { getArticlesSlugs } from "../../graphql/getArticlesSlugs";

const client = initializeApollo()

export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths = []
    console.log(chalk.blue(locales));
    if (locales != null) {
        for (const locale of locales) {
            const { data } = await client.query<GetArticlesSlugsQuery, GetArticlesSlugsQueryVariables>({ query: getArticlesSlugs, variables: { pagination: {}, locale: locale } })
            const slugs = data.articles?.data.map((article) => article.attributes?.slug)
            if (slugs != null) {
                for (const slug of slugs) {
                    paths.push({ params: { slug: slug?.toString() }, locale: locale })
                }
            }
        }
    }
    // getStaticPropsに渡される
    return { paths: paths, fallback: "blocking" }
};

type IStaticProps = {
    params: { slug: string; },
    locale: string;
}

export const getStaticProps = async ({ params, locale }: IStaticProps) => {
    try {
        const { data } = await client.query<GetArticlesQuery, GetArticlesQueryVariables>({
            query: getArticles, variables: {
                pagination: {}, filters: { slug: { eq: params.slug } }, locale: locale
            }
        })
        return {
            props: {
                "slug": params.slug
            },
            revalidate: 300,
        }
    }
    catch {
        return {
            notFound: true,
            revalidate: 300,
        }
    }
}
interface SlugStaticProps { slug: string }

const ArticlePage: NextPage<SlugStaticProps> = ({ slug }) => {
    const router = useRouter()
    if (slug == null) {
        return (
            <DisplayError
                error={{
                    __typename: "Undefined ID",
                    code: "01",
                    message: "Undefined ID",
                }}
            ></DisplayError>
        );
    } else {
        return (
            <Grid>
                <ArticleDetails slug={slug} ></ArticleDetails>
            </Grid>
        );
    }
};

export default ArticlePage;