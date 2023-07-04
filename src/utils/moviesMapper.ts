import { IMovie } from '../interfaces/AllCommonItefaces';

export const moviesMapper = (
  films: IMovie[]
): Pick<IMovie, 'id' | 'title' | 'name' | 'poster_path' | 'release_date'>[] => {
  return films.map(({ id, title, name, poster_path, release_date }) => ({
    id,
    title,
    name,
    poster_path,
    release_date,
  }));
};
