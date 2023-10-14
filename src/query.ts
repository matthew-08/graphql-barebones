export const Query = {
  category: (parent, args, { database }) => {
    return database.categories.find((c) => c.id === args.id);
  },
  todos: (parent, args, { database }) => {
    return database.todos.find((t) => (t.title = args.name));
  },
};
