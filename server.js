import Users from './users.js';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from '@apollo/server';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = startStandaloneServer(server, {
  context: async () => {
     const { cache } = server;
    return {
      // We create new instances of our data sources with each request,
      // passing in our server's cache.
      dataSources: {
        users: new Users({ cache }),
      },
    };
  },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});;
