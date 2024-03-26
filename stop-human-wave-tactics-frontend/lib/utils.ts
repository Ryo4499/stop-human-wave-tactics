import { GetArticlesWithCategoriesAndTagsQuery, ArticleEntity, ArticleEntityResponseCollection } from "../types/graphql_res"

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
export const inArticlesCategoriesTags = (object: any): object is GetArticlesWithCategoriesAndTagsQuery => { return "articles" in object && 'categories' in object && "tags" in object }