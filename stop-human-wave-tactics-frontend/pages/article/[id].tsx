import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import { addApolloState, initializeApollo } from "../../lib/apollo";
import { getArticle } from "../../graphql/getArticle";
import { getArticles } from "../../graphql/getArticles";
import { ArticleDetails } from "../../components/Article/ArticleDetails";
import DisplayError from "../../components/Common/DisplayError";
import { useLocale } from "../../lib/locale";
import { useRouter } from "next/router"
import { ArticleEntity, ArticleEntityResponseCollection, GetArticleQuery, GetArticleQueryVariables, GetArticlesIdsQuery, GetArticlesIdsQueryVariables, GetArticlesQuery, GetArticlesQueryVariables, GetI18NLocalesQuery, GetI18NLocalesQueryVariables } from "../../types/apollo_client";
import { getI18NLocales } from "../../graphql/getI18NLocales";
import { getArticlesIds } from "../../graphql/getArticlesIds";
import chalk from "chalk";

const client = initializeApollo()

export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths = []
    console.log(chalk.blue(locales));
    if (locales != null) {
        for (const locale of locales) {
            console.log(chalk.blue(locale));
            const { data } = await client.query<GetArticlesIdsQuery, GetArticlesIdsQueryVariables>({ query: getArticlesIds, variables: { pagination: {}, locale: locale } })
            const ids = data.articles?.data.map((article) => article.id)
            if (ids != null) {
                for (const id of ids) {
                    paths.push({ params: { id: id }, locale: locale })
                }
            }
            console.log(chalk.blue(paths));
        }
        console.log(chalk.blue(paths));
    }
    // getStaticPropsに渡される
    return { paths: paths, fallback: "blocking" }
};

type IStaticProps = {
    params: { id: string; },
    locale: string;
}

export const getStaticProps = async ({ params, locale }: IStaticProps) => {
    try {
        const { data } = await client.query<GetArticleQuery, GetArticleQueryVariables>({ query: getArticle, variables: { id: params.id, locale: locale } })
        return {
            props: {
                article: data
            },
            revaridate: 300,
        }
    }
    catch {
        return {
            notFound: true,
            revalidate: 1,
        }
    }
}

const ArticlePage: NextPage<ArticleEntity> = (article) => {
    const router = useRouter()
    if (article.id == null) {
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
                <ArticleDetails id={article.id} ></ArticleDetails>
            </Grid>
        );
    }
};

export default ArticlePage;