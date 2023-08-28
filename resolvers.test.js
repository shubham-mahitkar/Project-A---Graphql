// import { request } from 'graphql-request';
const request = require('graphql-request');
 
const graphqlClient = 'http://127.0.0.1:4000';

test('Create User', async () => {
    const createUserMutation = `
    mutation {
      createUser(name: "Robert123", email: "robert@gmail.com", password:"dfgszdfg") {
        name
        email
        password
      }
    }
    `;
    const response = await request.request(graphqlClient, createUserMutation);
    const createdUser = response.createUser;
  
    expect(createdUser).toMatchObject({
      name: 'Robert123',
      email: 'robert@gmail.com',
    });
});

test('Get User by ID', async () => {
    const getUserQuery = `
        query {
        user(id: 1) {
            name
            email
        }
        }
    `;
    const response = await request.request(graphqlClient, getUserQuery);
    const user = response.user;

    expect(user).toMatchObject({
        name: expect.any(String),
        email: expect.any(String),
    });
});

test('Update User', async () => {
    const updateUserMutation = `
        mutation {
          updateUser(id: 100, name: "Updated John100", email: "updated@gmail.com", password: "updated1234#@") {
            name
            email
            password
          }
        }
    `;
    const response = await request.request(graphqlClient, updateUserMutation);
    const updatedUser = response.updateUser;

    expect(updatedUser).toMatchObject({
        name: 'Updated John100',
        email: 'updated@gmail.com',
        password: 'updated1234#@'
    });
});

test('Delete User', async () => {
    const deleteUserMutation = `
        mutation {
        deleteUser(id: 90)
        }
    `;
    const response = await request.request(graphqlClient, deleteUserMutation);
    const deletedUser = response.deleteUser;

    expect(deletedUser).toBeTruthy();
});
