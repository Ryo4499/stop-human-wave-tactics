import { gql } from "graphql-request"

export const getArticle = gql`query($id: ID!, $locale: I18NLocaleCode!) {
  article(id: $id, locale: $locale) {
    data {
      id
      attributes {
        uuid
        title
        summary
        content
        thumbnail {
          data {
            attributes {
              name
              alternativeText
              caption
              width
              height
              url
              previewUrl
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
            }
          }
        }
        Seo {
          id
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                url
                previewUrl
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        createdAt
        updatedAt
        publishedAt
        locale
      }
    }
  }
}
`
