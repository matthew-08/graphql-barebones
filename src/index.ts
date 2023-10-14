import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './schema/typedefs';
import { Query } from './resolvers/Query';
import { database } from './database';

const resolvers = {
  Query,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    database,
  },
});

const startServer = async () => {
  const { url } = await server.listen();
  console.log(`Apollo server listening at ${url}`);
};

startServer();
