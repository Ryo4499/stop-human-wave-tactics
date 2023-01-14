import Grid from "@mui/material/Unstable_Grid2";
import { NextPage } from "next"
import { useRouter } from "next/router"
import { request } from "graphql-request"
import { ArticleDetails } from "../../components/Article"
import { getBackendURL } from "../../lib/graphqlClient";
import { getPageSize } from "../../lib/pagination";
import { getArticlesPages } from "../../graphql/getArticlesPages";
import { ArticleEntity, ArticleEntityResponseCollection } from "../../types/apollo_client";
import { getArticlesUUID } from "../../graphql/getArticlesUUID";
import { getArticles } from "../../graphql/getArticles";

interface UUIDParams { params: { uuid: string | undefined }, locale: string }
export const getStaticPaths = async ({ locales }: { locales: Array<string> }) => {
    const paths: Array<UUIDParams> = []
    if (locales != null) {
        for (const locale of locales) {
            const variables = { pagination: { pageSize: getPageSize() }, locale: locale }
            await request(getBackendURL(), getArticlesUUID, variables).then(({ articles }) => {
                articles.data.map((article: ArticleEntity) => paths.push({ params: { uuid: article.attributes?.uuid }, locale: locale }))
            })
        }
    }
    return { paths: paths, fallback: "blocking" }
}

type IStaticProps = {
    params: { uuid: string },
    locale: string
}

export const getStaticProps = async ({ params, locale }: IStaticProps) => {
    const variables = { filters: { uuid: { eq: params.uuid } }, pagination: {}, locale: locale }
    const result = await request(getBackendURL(), getArticles, variables).then(({ articles }: { articles: ArticleEntityResponseCollection }) => {
        return {
            props: {
                articles: articles
            },
            revalidate: 300,
        };
    }).catch(error => {
        return {
            notFound: true,
            revalidate: 300,
        }
    })
    return result
};

interface ArticlesProps {
    articles: ArticleEntityResponseCollection
}

const ArticlePage: NextPage<ArticlesProps> = ({ articles }: { articles: ArticleEntityResponseCollection | undefined }) => {
    const router = useRouter()
    if (articles) {
        return <Grid>
            <ArticleDetails articles={articles}></ArticleDetails>
        </Grid>
    } else {
        return <div>Shoot Article</div>
    }
}

export default ArticlePage