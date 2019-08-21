const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');
const prisma = require("./generated/prisma-client/");

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    snacks: (root, args, context) => context.prisma.prisma.snacks(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
        prisma,
    }
  },
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});