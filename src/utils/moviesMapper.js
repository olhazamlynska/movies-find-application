export const moviesMapper = films => {
  return films.map(
    ({
      id,
      title,
      name,
      poster_path: posterPath,
      release_date: releaseDate,
    }) => ({
      id,
      title,
      name,
      posterPath,
      releaseDate,
    })
  );
};
