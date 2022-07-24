import { gql } from "@apollo/client"

export const getCategories = gql`query($id:ID!,$locale:I18NLocaleCode!){
  category(id:$id,locale:$locale){
    data{
      id
      attributes{
        name
        articles{
          data{
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
