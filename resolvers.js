// import Users  from './users.js';

const resolvers = {
  Query: {
    users: async (_, {}, { dataSources }) => {
      return dataSources.users.getAllUser();
    },
    user: async (parent, { id }, { dataSources }) => {
      const getuser = await dataSources.users.getUser(id);
      return getuser;
    },
  },
  Mutation: {
    createUser: async (parent, { name, email, password }, { dataSources }) => {
      let data = {
            "name":name,
            "email":email,
            "password":password
          };

      const getuser = await dataSources.users.createUser(data);
      return getuser;
    },
    updateUser: async (parent, { id, name, email }, { dataSources }) => {
      let data = {
        "id": id,
        "name":name,
        "email":email,
      };

      const getuser = await dataSources.users.updateUser(data);
      return getuser;
    },
    deleteUser: async (parent, { id }, { dataSources }) => {
      await dataSources.users.deleteUser(id);
      return true;
    }
  }
};

export default resolvers;
