import { gql } from "graphql-request"

export const getArticlesByUUID = gql`
query getArticlesByUUID(
  $filters: ArticleFiltersInput
  $pagination: PaginationArg!
  $sort: [String]
  $locale: I18NLocaleCode!
) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
    publicationState: LIVE
  ) {
    data {
      id
    }
  }
}
`
