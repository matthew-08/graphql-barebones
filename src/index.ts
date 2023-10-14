import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './schema/typedefs';

const resolvers = {
  Query: {
    category: (parent, args, { database }) => {
      return database.categories.find((c) => c.id === args.id);
    },
    todos: (parent, args, { database }) => {
      return database.todos.find((t) => (t.title = args.name));
    },
  },
  Category: {
    todos: (parent, args, { database }) => {
      return database.todos.filter((t) => t.categoryId === parent.id);
    },
  },
  Todo: {
    category: (parent, args, { database }) => {
      return database.categories.find((c) => c.id === parent.categoryId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: database,
});

const startServer = async () => {
  const { url } = await server.listen();
  console.log(`Apollo server listening at ${url}`);
};

startServer();
