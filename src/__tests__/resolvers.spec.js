import { jest } from "@jest/globals";

import resolvers from "../resolvers";

describe("Query.users", () => {
  const mockGetAllUsers = jest.fn();
  const MockUser = jest.fn();
  const actualApiResult = [
    {
      email: "test@gmail.com",
      id: 1,
      name: "testt",
      password:
        "pbkdf2:sha256:600000$7blUGE7X47wfLhA5$812e9717924855df00688f81d5c8b84b7a1878af7637d523a286c7a1732c7fff",
    },
  ];
  const dataSources ={
    users: MockUser,
  };

  beforeEach(() => {
    MockUser.getAllUser = mockGetAllUsers;
    mockGetAllUsers.mockReturnValue(actualApiResult);
  });

  test("get users", async () => {
    const mockContext = { dataSources };
    const result = await resolvers.Query.users(null, {}, mockContext);

    expect(mockGetAllUsers).toHaveBeenCalledTimes(1);
    expect(result).toEqual(actualApiResult);
  });
});

describe("Mutation for createUser", () => {
  const mockCreateUser = jest.fn();
  const MockUser = jest.fn();
  const actualApiResult = [
    {
      email: "create@gmail.com",
      name: "create",
      password: "create@#",
    },
  ];
  const dataSources ={
    users: MockUser,
  };

  beforeEach(() => {
    MockUser.createUser = mockCreateUser;
    mockCreateUser.mockReturnValue(actualApiResult);
  });

  test("add user", async () => {
    const mockContext = { dataSources };
    const result = await resolvers.Mutation.createUser(null, {
      email: "create@gmail.com",
      name: "create",
      password:
        "create@#",
    }, mockContext);
    expect(mockCreateUser).toHaveBeenCalledTimes(1);
    expect(result).toEqual(actualApiResult);
  });
});



describe("Mutation for updateUser", () => {
  const mockUpdateUser = jest.fn();
  const MockUser = jest.fn();
  const actualApiResult = [
    {
      email: "updated@gmail.com",
      id: 2,
      name: "update"},
  ];
  const dataSources ={
    users: MockUser,
  };

  beforeEach(() => {
    MockUser.updateUser = mockUpdateUser;
    mockUpdateUser.mockReturnValue(actualApiResult);
  });

  test("edit user", async () => {
    const mockContext = { dataSources };
    const result = await resolvers.Mutation.updateUser(null, {id:2}, mockContext);
    console.log("resule: ", result);

    expect(mockUpdateUser).toHaveBeenCalledTimes(1);
    expect(result).toEqual(actualApiResult);
  });
});

describe("Mutation for deleteUser", () => {
  const mockDeleteUser = jest.fn();
  const MockUser = jest.fn();
  const actualApiResult = true;
  const dataSources ={
    users: MockUser,
  };

  beforeEach(() => {
    MockUser.deleteUser = mockDeleteUser;
    mockDeleteUser.mockReturnValue(actualApiResult);
  });

  test("delete user", async () => {
    const mockContext = { dataSources };
    const result = await resolvers.Mutation.deleteUser(null, {id:2}, mockContext);
    console.log("delete: ", result, dataSources);

    expect(mockDeleteUser).toHaveBeenCalledTimes(1);
    expect(result).toBe(true);
  });
});