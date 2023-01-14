import { gql } from "graphql-request"

export const getArticlesUUID = gql`
query($filters:ArticleFiltersInput,$pagination:PaginationArg!,$sort:[String],$publicationState:PublicationState,$locale:I18NLocaleCode!){
  articles(filters:$filters,pagination:$pagination,sort:$sort,publicationState:$publicationState,locale:$locale){
    data{
      attributes{
        uuid
      }
    }
  }
}
`
