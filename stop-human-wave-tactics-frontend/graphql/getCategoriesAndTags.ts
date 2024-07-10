import { gql } from "graphql-request"

export const getCategoriesAndTags = gql`
query getCategoriesAndTags($categoryFilters: CategoryFiltersInput,$tagFilters: TagFiltersInput,$categoryPagination: PaginationArg!,$tagPagination: PaginationArg!,$categorySort: [String],$tagSort: [String],$locale: I18NLocaleCode!){
  tags(filters:$tagFilters,pagination:$tagPagination,sort:$tagSort,locale:$locale){
    data{
      id
      attributes{
        name
        articles {
          data {
            id
          }
        }
      }
    }
  }
  categories(filters:$categoryFilters,pagination:$categoryPagination,sort:$categorySort,locale:$locale){
    data{
      id
      attributes{
        name
        articles {
          data {
            id
          }
        }
      }
    }
  }
}
`