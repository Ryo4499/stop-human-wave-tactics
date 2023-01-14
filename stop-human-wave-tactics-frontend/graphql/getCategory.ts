import { gql } from "graphql-request"

export const getCategory = gql`
query($filters: CategoryFiltersInput, $pagination: PaginationArg!, $sort: [String], $locale: I18NLocaleCode!){
  categories(filters:$filters,pagination:$pagination,sort:$sort,locale:$locale){
    data{
      id
      attributes{
        uuid
        name
        articles{
          data{
            id
            attributes{
              uuid
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
      uuid
      id
      attributes{
        name
        articles{
          data{
            id
            attributes{
              uuid
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
