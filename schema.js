const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    snack: Snack!
    nutrition: Nutrition!
    dietary: Dietary!
  }

  type Snack {
    id: ID!
    name: String!
    description: String
    image: String!
    nutrition: Nutrition!
    dietary: Dietary!
  }

  type Nutrition {
    id: ID!
    calories: Float!
    sugar: Float!
  }

  type Dietary {
    id: ID!
    vegetarian: Boolean!
    vegan: Boolean!
    nutFree: Boolean!
    glutenFree: Boolean!
  }
`

module.exports = typeDefs;