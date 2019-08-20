const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String!
    name: String!
  }
`;

module.exports = typeDefs;