// import { request } from 'graphql-request';
// const request = require('graphql-request');
// const { makeExecutableSchema } = require('@graphql-tools/schema');
// const { mockServer } = require('@graphql-tools/mock');
// const { graphql } = require('graphql');
// const schemas = require('../schema')
// const Users = require('../datasource');
import {jest} from '@jest/globals'

import resolvers from './resolvers';
// import {gql} from '@apollo/server';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mockedAxios = new MockAdapter(axios);
// const graphqlClient = 'http://127.0.0.1:4000';


const MockUser = jest.fn().mockImplementation(() => {
  return {getAllUser: jest.fn().mockReturnValue([
    {
        "email": "test@gmail.com",
        "id": 1,
        "name": "testt",
        "password": "pbkdf2:sha256:600000$7blUGE7X47wfLhA5$812e9717924855df00688f81d5c8b84b7a1878af7637d523a286c7a1732c7fff"
    }])}});

const dataSources = 
    {
      users:  MockUser,
    }
  

test("get users", async () => {
  const mockContext = { dataSources };
  const result = await resolvers.Query.users(null, {}, mockContext);

  expect(
      result
  ).toHaveBeenCalledTimes(1);
  // expect(result).toEqual(expected);
});



// jest.mock('axios')

// describe('axios tests with mocking', () => {
//   test('should fetch posts', async () => {

//     const fakeResp = { data : [
//       {
//         "id": "2",
//         "name": "shubham",
//         "email": "shubham@test.py",
//         "password": "pass@#"
//       }]};

//     // mockedAxios.get.mockRejectedValue('Network error: Something went wrong');
//     // mockedAxios.get.mockResolvedValue(fakeResp)  //showing undefined

//     const axiosSpy = jest.spyOn(resolvers.Query, 'users');

//     const result = await resolvers.Query.users;

//     console.log("axios.get() called with>>>", axios.get.mock.calls[0]);
//     console.log("axios.get() returns>>>", axios.get.mock.results[0]);
//     console.log("res: ", result, axiosSpy);

//     expect(result).toEqual(fakeResp)  //that may be fail
//     expect(axiosSpy).toHaveBeenCalledTimes(1)  //that should pass if not run below command
//     // expect(axios.get).toHaveBeenCalledTimes(1) 

//   });
// });


///

// const typeDefs = `
//   type User {
//   id: ID!
//   name: String!
//   email: String!
//   password: String
// }

// type Query {
//   users: [User!]!
//   user(id: ID!): User!
// }
// `;

// const schema = makeExecutableSchema({ typeDefs });

// describe('GraphQL Mock Query Test', () => {
//   it('should mock a simple query', async () => {
//     // Create a mock server based on your schema
//     const server = mockServer(schema);

    
//     // Use the mock server to execute the query
//     const response = await server.query(resolvers.Query.users);
//     // console.log("responses: ", stringify(response))


//     expect(response).toMatchObject({
//       data: {
//         id: expect.any(String), // This checks if the those fields are a string
//         name: expect.any(String),
//         email: expect.any(String),
//         password: expect.any(String)
//       },
//     });
//   });
// });

///


