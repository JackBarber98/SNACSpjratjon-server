const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');
const prisma = require("./generated/prisma-client/");

function getNutritional(databaseEntry) {
    return ({
        "calories": databaseEntry.nutrition().calories,
        "sugar": databaseEntry.nutrition().sugar
    });
}

function getDietary(databaseEntry) {
    return ( 
        {
            "vegetarian": databaseEntry.dietary().vegetarian,
            "vegan": databaseEntry.dietary().vegan,
            "nutFree": databaseEntry.dietary().nutFree,
            "glutenFree": databaseEntry.dietary().glutenFree,
        }
    );
}

const resolvers = {
  Query: {
    snack: () => {
        const databaseEntry = server.context().prisma.prisma.snack({ id: "cjzjpljikq27h0b53dqfr9u99" });
        const snackEntry = {
            "id": databaseEntry.id,
            "name": databaseEntry.name,
            "description": databaseEntry.description,
            "nutrition": getNutritional(databaseEntry),
            "dietary": getDietary(databaseEntry),
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
  context: () => {
    return {
        "text": "hello world",
        prisma,
    }
  },
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});