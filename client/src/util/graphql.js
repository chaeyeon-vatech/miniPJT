import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
    {
        contents{
            _id,
            content,
            createdAt,
            title
        }
    }
`;