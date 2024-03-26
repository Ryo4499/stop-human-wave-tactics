import { gql } from "graphql-request"

export const getCategories = gql`
query getCategories(
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
      attributes {
        uuid
        name
        articles(filters: { publishedAt: { ne: null } }, publicationState: LIVE) {
          data {
            attributes {
              uuid
            }
          }
        }
        createdAt
        updatedAt
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
