import { gql } from "graphql-request"

export const getTag = gql`
query getTag($id: ID!, $locale: I18NLocaleCode!) {
  tag(id: $id, locale: $locale) {
    data {
      id
      attributes {
        name
        articles(
          filters: { publishedAt: { ne: null } }
          publicationState: LIVE
        ) {
          data {
            id
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