const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    contents: [Content]
  }
  type Content {
    _id: ID
    title: String
    content: String
    createdAt: String
  }
  input ContentInput{
    title: String
    content: String
  }
  type Mutation{
    createContent(contentInput: ContentInput): Content!
    updateContent(_id: String, title:String, content:String): Content!
    removeContent(_id: String): Content!
    searchOne(_id: String) : Content!
  }
`;

module.exports = typeDefs;