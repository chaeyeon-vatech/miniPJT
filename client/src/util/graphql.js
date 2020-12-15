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