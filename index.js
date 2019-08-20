const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema.js');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    name: () => 'maltesers'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  });