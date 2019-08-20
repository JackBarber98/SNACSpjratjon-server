const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');
const prisma = require("./generated/prisma-client/");

function getNutritional(databaseEntry) {
    return ({
        "calories": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).nutrition().calories,
        "sugar": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).nutrition().sugar
    });
}

function getDietary(databaseEntry) {
    return ( 
        {
            "vegetarian": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).dietary().vegetarian,
            "vegan": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).dietary().vegan,
            "nutFree": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).dietary().nutFree,
            "glutenFree": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).dietary().glutenFree,
        }
    );
}

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    snack: () => {
        const databaseEntry = server.context().prisma.prisma;
        const snackEntry = {
            "id": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).id,
            "name": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).name,
            "image": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).image,
            "description": databaseEntry.snack({ id: "cjzjpljikq27h0b53dqfr9u99" }).description,
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