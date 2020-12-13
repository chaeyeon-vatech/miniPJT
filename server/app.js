import typeDefs from './graphql/schema/index.js';
import resolvers from './graphql/resolvers/index.js';

import dotenv from 'dotenv';

import pkg from 'apollo-server';
const {ApolloServer} = pkg;

dotenv.config(); // 환경 변수를 찾아와 사용할 수 있게 해줌

import dbConnect from './models/index.js';
dbConnect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
