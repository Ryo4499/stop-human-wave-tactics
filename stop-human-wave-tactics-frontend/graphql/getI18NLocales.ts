import { gql } from "graphql-request"

export const getI18NLocales = gql`
query getI18NLocales (
  $filters: I18NLocaleFiltersInput
  $pagination: PaginationArg
  $sort: [String]
) {
  i18NLocales(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      attributes {
        name
        code
      }
    }
  }
}
`