// import Users  from './users.js';

const resolvers = {
  Query: {
    users: async (_, {}, { dataSources }) => {
      return dataSources.users.getAllUser();
    },
    user: async (_, { id }, { dataSources }) => {
      const getuser = await dataSources.users.getUser(id);
      return getuser;
    },
  },
  User: {
    awards: async (_, {}, { dataSources }) => {
        return await dataSources.users.getAwards(_.id);
    }
  },
  Mutation: {
    createUser: async (parent, { name, email, password, application }, { dataSources }) => {
      let data = {
        name: name,
        email: email,
        password: password,
        application: application,
      };

      const getuser = await dataSources.users.createUser(data);
      return getuser;
    },
    updateUser: async (parent, { id, name, email, application }, { dataSources }) => {
      let data = {
        id: id,
        name: name,
        email: email,
        application: application,
      };

      const getuser = await dataSources.users.updateUser(data);
      return getuser;
    },
    deleteUser: async (parent, { id }, { dataSources }) => {
      await dataSources.users.deleteUser(id);
      return true;
    },
  },
};

export default resolvers;
