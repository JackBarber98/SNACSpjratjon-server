const { ApolloServer, gql } = require('apollo-server');
const data = require("./snacks.json");
const typeDefs = require('./schema.js');
const prisma = require("./generated/prisma-client");

function getNutritional() {
    return (
        {
            "id": 1,
            "calories": 160.2,
            "sugar": 16.5,            
        }
    );
}

function getDietary() {
    return ( 
        {
            "id": 1,
            "vegetarian": true,
            "vegan": false,
            "nutFree": true,
            "glutenFree": false,
        }
    );
}

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    snack: () => {
        const snackEntry = {
            "id": 1,
            "name": "Malteser",
            "description": "hmm",
            "nutrition": getNutritional(),
            "dietary": getDietary(),
        }
        return snackEntry;
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
  context: request => ({
      ...request,
      prisma
  }),
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});