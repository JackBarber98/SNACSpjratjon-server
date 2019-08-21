const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    snacks: [Snack!]!
  }

  type Snack {
    id: ID!
    name: String!
    image: String!
    description: String
    calories: Float!
    sugar: Float!
    vegetarian: Boolean!
    vegan: Boolean!
    nutFree: Boolean!
    glutenFree: Boolean!
  }
`

module.exports = typeDefs;