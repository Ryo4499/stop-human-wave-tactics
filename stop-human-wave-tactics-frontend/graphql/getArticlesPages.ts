import { gql } from "graphql-request"

export const getArticlesPages = gql`
query($filters:ArticleFiltersInput,$pagination:PaginationArg!,$sort:[String],$locale:I18NLocaleCode!){
  articles(filters:$filters,pagination:$pagination,sort:$sort,locale:$locale,publicationState:LIVE){
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
