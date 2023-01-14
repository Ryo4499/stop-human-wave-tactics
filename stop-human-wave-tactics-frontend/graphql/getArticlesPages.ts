import { gql } from "graphql-request"

export const getArticlesPages = gql`
query($filters:ArticleFiltersInput,$pagination:PaginationArg!,$sort:[String],$publicationState:PublicationState,$locale:I18NLocaleCode!){
  articles(filters:$filters,pagination:$pagination,sort:$sort,publicationState:$publicationState,locale:$locale){
    meta{
      pagination{
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`

export const getArticlesPagesLocal = gql`
query($filters:ArticleFiltersInput,$pagination:PaginationArg!,$sort:[String],$publicationState:PublicationState,$locale:I18NLocaleCode!){
  articles(filters:$filters,pagination:$pagination,sort:$sort,publicationState:$publicationState,locale:$locale) @client {
    meta{
      pagination{
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`
