import { gql } from "@apollo/client"

export const getArticlesSlugs = gql`
query($filters:ArticleFiltersInput,$pagination:PaginationArg!,$sort:[String],$publicationState:PublicationState,$locale:I18NLocaleCode!){
  articles(filters:$filters,pagination:$pagination,sort:$sort,publicationState:$publicationState,locale:$locale){
    data{
      attributes{
        slug
      }
    }
  }
}
`

export const getArticlesSlugsLocal = gql`
query($filters:ArticleFiltersInput,$pagination:PaginationArg!,$sort:[String],$publicationState:PublicationState,$locale:I18NLocaleCode!){
  articles(filters:$filters,pagination:$pagination,sort:$sort,publicationState:$publicationState,locale:$locale) @client {
    data{
      attributes{
        slug
      }
    }
  }
}
`
