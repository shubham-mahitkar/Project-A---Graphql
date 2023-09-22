import { gql } from 'graphql-tag';

const typeDefs = gql `

type User {
id: ID!
name: String!
email: String!
password: String
application: [String]
}

type Query {
  users: [User!]!
  user(id: ID!): User!
}

type Mutation {
  createUser(name: String!, email: String!, password: String!): User!
  updateUser(id: ID!, name: String, email: String, password: String, application: [String]): User!
  deleteUser(id: ID!): Boolean!
}
`;

export default typeDefs;
