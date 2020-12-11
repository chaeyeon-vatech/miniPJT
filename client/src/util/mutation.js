import gql from "graphql-tag";

const SEARCH_MUTATION = gql`
   mutation {
       searchOne(_id:""){
           title
           content
       }
   }
`;

export default SEARCH_MUTATION;