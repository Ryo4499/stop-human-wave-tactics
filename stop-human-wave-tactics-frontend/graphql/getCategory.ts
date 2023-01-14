import { gql } from "graphql-request"

export const getCategory = gql`
query getCategory($id: ID!, $locale: I18NLocaleCode!) {
  category(id: $id, locale: $locale) {
    data {
      id
      attributes {
        uuid
        name
        articles {
          data {
            id
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
  }
}
`