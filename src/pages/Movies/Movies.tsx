import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../../services/API';

import { Btn, Input, LinkNav } from './Movies.styled';
import Box from '../../components/Box/';
import RequestError from '../../components/RequestError';
import { IMovie } from '../../interfaces/AllCommonItefaces';

const Movies = () => {
  const [films, setFilms] = useState<IMovie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery: string = searchParams.get('query') ?? '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      query: { value: string };
    };
    const searchQuery = target.query.value;
    setSearchParams(searchQuery);

    if (searchQuery.trim() === '' || searchQuery === null) {
      setFilms([]);
      return;
    }
  };
  useEffect(() => {
    if (searchQuery.trim() === '' || searchQuery === null) {
      setFilms([]);
      return;
    }
    async function getMoviesByName(searchQuery: string) {
      try {
        const { results } = await API.searchMoviesByName(searchQuery);
        setFilms(results);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setFilms([]);
        }
      }
    }
    getMoviesByName(searchQuery);
  }, [searchQuery]);

  return (
    <Box as={'div'} pl={[7]}>
      {error && <RequestError />}
      <form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <Btn type="submit">Find films</Btn>
      </form>

      {films.length !== 0 && (
        <>
          <ul>
            {films.map(({ id, title }) => (
              <li key={id}>
                <LinkNav to={`${id}`} state={{ from: location }}>
                  {title}
                </LinkNav>
              </li>
            ))}
          </ul>
        </>
      )}
    </Box>
  );
};

export default Movies;
