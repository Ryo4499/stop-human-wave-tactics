import { gql } from "graphql-request"

export const getTagsByUUID = gql`
query getTagsByUUID(
  $filters: TagFiltersInput
  $pagination: PaginationArg!
  $sort: [String]
  $locale: I18NLocaleCode!
) {
  tags(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
  ) {
    data {
      id
      attributes {
        articles(
          filters: { publishedAt: { ne: null } }
          publicationState: LIVE
        ) {
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