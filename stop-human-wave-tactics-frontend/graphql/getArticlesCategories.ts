import { gql } from "graphql-request"
export const getArticlesCategories = gql`
query getArticlesCategories(
  $filters: ArticleFiltersInput
  $pagination: PaginationArg!
  $sort: [String]
  $publicationState: PublicationState
  $locale: I18NLocaleCode!
) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    publicationState: $publicationState
    locale: $locale
  ) {
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
              uuid
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
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
  categories(
    filters: {}
    pagination: {}
    sort: []
    locale: $locale
  ) {
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