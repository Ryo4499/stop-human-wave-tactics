import { gql } from "graphql-request"

export const getCategoriesUUID = gql`query getCategoriesUUID(
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
        uuid
        articles {
          data {
            id
            attributes {
              uuid
            }
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