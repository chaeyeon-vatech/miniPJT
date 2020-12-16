import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
    {
        contents(search:"",category:0,index:1,hasNext:true){
            _id,
            content,
            createdAt,
            title
        }
    }
`;

export const SearchQuery = gql`
    query contents($search:String!,$category:Int!,$index:Int!, $hasNext:Boolean!){
        contents(search:$search,category:$category,index:$index,hasNext:$hasNext){
            _id
            title
            content
            createdAt
        }
    }
`;