import { gql } from 'graphql-tag';

const typeDefs = gql `

type Award {
  award: String!
  album_song: String!
  year: Int
}

type User {
id: ID!
name: String!
email: String!
password: String
application: [String]
followers: String
labels: [String]
awards: [Award!]
}

type Query {
  users: [User!]!
  user(id: ID!): User!
}

type Mutation {
  createUser(name: String!, email: String!, password: String!, application: [String]): User!
  updateUser(id: ID!, name: String, email: String, password: String, application: [String]): User!
  deleteUser(id: ID!): Boolean!
}
`;

export default typeDefs;
