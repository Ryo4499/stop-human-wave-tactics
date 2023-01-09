import { gql } from "@apollo/client"

export const getArticlesIds = gql`
query($filters:ArticleFiltersInput,$pagination:PaginationArg!,$sort:[String],$publicationState:PublicationState,$locale:I18NLocaleCode!){
  articles(filters:$filters,pagination:$pagination,sort:$sort,publicationState:$publicationState,locale:$locale){
    data{
      id
    }
  }
}
`

export const getArticlesIdsLocal = gql`
query($filters:ArticleFiltersInput,$pagination:PaginationArg!,$sort:[String],$publicationState:PublicationState,$locale:I18NLocaleCode!){
  articles(filters:$filters,pagination:$pagination,sort:$sort,publicationState:$publicationState,locale:$locale) @client {
    data{
      id
    }
  }
}
`
