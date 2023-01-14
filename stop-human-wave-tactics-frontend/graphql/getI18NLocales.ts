import { gql } from "graphql-request"

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
// client側のcacheを見に行く
export const getI18NLocalesLocal = gql`query (
  $filters: I18NLocaleFiltersInput
  $pagination: PaginationArg
  $sort: [String]
) {
  i18NLocales(filters: $filters, pagination: $pagination, sort: $sort) @client {
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
