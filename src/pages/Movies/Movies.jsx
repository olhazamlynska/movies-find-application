import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../../services/API';
import { moviesMapper } from 'utils/moviesMapper';
import { Btn, Input, LinkNav } from './Movies.styled';
import { Box } from 'components/Box/Box';
import RequestError from 'components/RequestError/RequestError';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });

    if (searchQuery.trim('') === '' || searchQuery === null) {
      setFilms([]);
      return;
    }

    e.target.reset();
  };
  useEffect(() => {
    if (searchQuery.trim('') === '' || searchQuery === null) {
      setFilms([]);
      return;
    }
    API.searchMoviesByName(searchQuery)
      .then(({ results }) => {
        const films = moviesMapper(results);
        setFilms(films);
      })
      .catch(error => {
        console.log(error.message);
        setError(error);
        setFilms([]);
      });
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
