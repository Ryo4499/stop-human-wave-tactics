import { ArticleEntity, ArticleEntityResponse, ArticleEntityResponseCollection } from "../types/graphql_res"

export const convDatetimeFormat = (datetime: string) => datetime.replace("T", " ").replace(/\..*$/g, "").replace(/\-/g, "/")

export const convDatetimeArticles = (articles: ArticleEntityResponseCollection) => {
    const convArticles = articles.data.map((article: ArticleEntity) => {
        if (article.attributes) {
            article.attributes.createdAt = convDatetimeFormat(article.attributes.createdAt)
            article.attributes.updatedAt = convDatetimeFormat(article.attributes.updatedAt)
        }
        return article
    })
    articles.data = convArticles
    return articles
}