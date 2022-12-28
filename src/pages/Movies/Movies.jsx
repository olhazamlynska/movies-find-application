import { useSearchParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../../services/API';
import { moviesMapper } from 'utils/moviesMapper';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '' && searchQuery === null) {
      setFilms([]);
      return;
    }
    if (searchQuery.trim('') === '' || searchQuery === '') {
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
        setFilms([]);
      });
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Find films</button>
      </form>
      {films.length !== 0 && (
        <>
          <ul>
            {films.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Movies;
