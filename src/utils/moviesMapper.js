export const filmMaper = films => {
  return films.map(
    ({ id, title, poster_path: posterPath, release_date: releaseDate }) => ({
      id,
      title,
      posterPath,
      releaseDate,
    })
  );
};
