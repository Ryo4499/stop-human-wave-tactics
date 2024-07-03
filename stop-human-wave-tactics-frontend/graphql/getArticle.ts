import { gql } from "graphql-request"

export const getArticle = gql`
query getArticle($id: ID!, $locale: I18NLocaleCode!) {
  article(id: $id, locale: $locale) {
    data {
      attributes {
        title
        summary
        content
        thumbnail {
          data {
            id
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
        tags {
          data {
            id
            attributes{
              name
            }
          }
        }
        seo {
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
