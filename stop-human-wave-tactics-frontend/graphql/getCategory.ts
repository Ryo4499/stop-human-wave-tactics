import { gql } from "@apollo/client"

export const getCategory = gql`
query($filters: CategoryFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!){
  categories(filters:$filters,pagination:$pagination,sort:$sort,locale:$locale){
    data{
      id
      attributes{
        slug
        name
        articles{
          data{
            id
            attributes{
              slug
            }
          }
        }
        createdAt
        updatedAt
        locale
      }
    }
    meta{
      pagination{
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`

export const getCategoryLocal = gql`
query($filters: CategoryFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!){
  categories(filters:$filters,pagination:$pagination,sort:$sort,locale:$locale) @client {
    data{
      slug
      id
      attributes{
        name
        articles{
          data{
            id
            attributes{
              slug
            }
          }
        }
        createdAt
        updatedAt
        locale
      }
    }
    meta{
      pagination{
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`
