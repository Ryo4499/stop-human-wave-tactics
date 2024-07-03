import { gql } from "graphql-request"

export const getCategoriesByUUID = gql`
query getCategoriesByUUID(
  $filters: CategoryFiltersInput
  $pagination: PaginationArg!
  $sort: [String]
  $locale: I18NLocaleCode!
) {
  categories(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
  ) {
    data {
      id
      attributes {
        articles(filters: { publishedAt: { ne: null } }, publicationState: LIVE) {
          data {
            id
          }
        }
        locale
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`