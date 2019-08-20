const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema.js');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    snack: () => {
        return {
            "id": 1,
            "name": "Malteser",
            "description": "hmm",
        }
    },
    nutrition: () => {
        return {
            "id": 1,
            "calories": 160.2,
            "sugar": 16.5,
        }
    },
    dietary: () => {
        return {
            "id": 1,
            "vegetarian": true,
            "vegan": false,
            "nutFree": true,
            "glutenFree": false,
        }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});