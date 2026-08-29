import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
     query {
    products {
      id,
      pname,
      price,
      desc
     
    }
}
`

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $pname: String!
    $price: Float!
    $desc: String!
  ) {
    addProduct(
      pname: $pname
      price: $price
      desc: $desc
    ) {
      
      pname
      price
      desc
    }
  }
`;


export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;


export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id:ID!
    $pname: String!
    $price: Float!
    $desc: String!
  ) {
    updateProduct(
      id:$id
      pname: $pname
      price: $price
      desc: $desc
    ) {
      id
      pname
      price
      desc
    }
  }
`;
