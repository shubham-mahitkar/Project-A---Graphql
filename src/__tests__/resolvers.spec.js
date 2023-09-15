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
