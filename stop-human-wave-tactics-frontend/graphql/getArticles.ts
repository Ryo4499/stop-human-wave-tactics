import { gql } from "graphql-request"

export const getArticles = gql`
query getArticles(
  $filters: ArticleFiltersInput
  $pagination: PaginationArg!
  $sort: [String]
  $locale: I18NLocaleCode!
) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    locale: $locale
    publicationState: LIVE
  ) {
    data {
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
            attributes {
              uuid
              name
            }
          }
        }
        tags {
          data {
            attributes {
              uuid
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
