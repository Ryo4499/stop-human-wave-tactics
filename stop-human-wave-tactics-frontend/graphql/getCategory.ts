import { gql } from "graphql-request"

export const getCategory = gql`
query getCategory($id: ID!, $locale: I18NLocaleCode!) {
  category(id: $id, locale: $locale) {
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
  }
}
`