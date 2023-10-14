export const Query = {
  artists: (parent, { input: { filter } }, context) => {
    console.log(filter);
    let result: any[] = [];
    if (filter) {
      if ('genre' in filter) {
        filter.genre.forEach((genre) => {
          const ok = context.database.artists.filter((a) => a.genre === genre);
          result = result.concat(ok);
        });
      }
    }
    console.log(result);
    return result;
  },
};
