import { gql } from "graphql-request"

export const getArticlesUUID = gql`
query getArticlesUUID(
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
      attributes {
        uuid
      }
    }
  }
}
`
