import { gql } from "@apollo/client"

export const getI18NLocales = gql`query (
  $filters: I18NLocaleFiltersInput
  $pagination: PaginationArg
  $sort: [String]
) {
  i18NLocales(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        name
        code
      }
    }
  }
}
`
