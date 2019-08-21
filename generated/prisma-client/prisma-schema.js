module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.6). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateSnack {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createSnack(data: SnackCreateInput!): Snack!
  updateSnack(data: SnackUpdateInput!, where: SnackWhereUniqueInput!): Snack
  updateManySnacks(data: SnackUpdateManyMutationInput!, where: SnackWhereInput): BatchPayload!
  upsertSnack(where: SnackWhereUniqueInput!, create: SnackCreateInput!, update: SnackUpdateInput!): Snack!
  deleteSnack(where: SnackWhereUniqueInput!): Snack
  deleteManySnacks(where: SnackWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  snack(where: SnackWhereUniqueInput!): Snack
  snacks(where: SnackWhereInput, orderBy: SnackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Snack]!
  snacksConnection(where: SnackWhereInput, orderBy: SnackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SnackConnection!
  node(id: ID!): Node
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

type SnackConnection {
  pageInfo: PageInfo!
  edges: [SnackEdge]!
  aggregate: AggregateSnack!
}

input SnackCreateInput {
  id: ID
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

type SnackEdge {
  node: Snack!
  cursor: String!
}

enum SnackOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  image_ASC
  image_DESC
  description_ASC
  description_DESC
  calories_ASC
  calories_DESC
  sugar_ASC
  sugar_DESC
  vegetarian_ASC
  vegetarian_DESC
  vegan_ASC
  vegan_DESC
  nutFree_ASC
  nutFree_DESC
  glutenFree_ASC
  glutenFree_DESC
}

type SnackPreviousValues {
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

type SnackSubscriptionPayload {
  mutation: MutationType!
  node: Snack
  updatedFields: [String!]
  previousValues: SnackPreviousValues
}

input SnackSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SnackWhereInput
  AND: [SnackSubscriptionWhereInput!]
  OR: [SnackSubscriptionWhereInput!]
  NOT: [SnackSubscriptionWhereInput!]
}

input SnackUpdateInput {
  name: String
  image: String
  description: String
  calories: Float
  sugar: Float
  vegetarian: Boolean
  vegan: Boolean
  nutFree: Boolean
  glutenFree: Boolean
}

input SnackUpdateManyMutationInput {
  name: String
  image: String
  description: String
  calories: Float
  sugar: Float
  vegetarian: Boolean
  vegan: Boolean
  nutFree: Boolean
  glutenFree: Boolean
}

input SnackWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  calories: Float
  calories_not: Float
  calories_in: [Float!]
  calories_not_in: [Float!]
  calories_lt: Float
  calories_lte: Float
  calories_gt: Float
  calories_gte: Float
  sugar: Float
  sugar_not: Float
  sugar_in: [Float!]
  sugar_not_in: [Float!]
  sugar_lt: Float
  sugar_lte: Float
  sugar_gt: Float
  sugar_gte: Float
  vegetarian: Boolean
  vegetarian_not: Boolean
  vegan: Boolean
  vegan_not: Boolean
  nutFree: Boolean
  nutFree_not: Boolean
  glutenFree: Boolean
  glutenFree_not: Boolean
  AND: [SnackWhereInput!]
  OR: [SnackWhereInput!]
  NOT: [SnackWhereInput!]
}

input SnackWhereUniqueInput {
  id: ID
}

type Subscription {
  snack(where: SnackSubscriptionWhereInput): SnackSubscriptionPayload
}
`
      }
    