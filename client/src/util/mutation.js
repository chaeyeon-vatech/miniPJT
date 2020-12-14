import gql from "graphql-tag";

const SEARCH_MUTATION = gql`
    mutation {
        searchOne(_id:""){
            title
            content
        }
    }
`;

const DELETE_MUTATION = gql`
    mutation removeContent($post_id: ID!){
        removeContent(_id:$post_id) {
            title
            content
        }
    }
`;


export default SEARCH_MUTATION;