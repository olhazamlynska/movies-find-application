import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getMoviesByName } from '../../services/API';
import { IMovie } from '../../interfaces/AllCommonItefaces';
import Box from '../../components/Box/';
import RequestError from '../../components/RequestError';
import SearchForm from '../../components/SearchForm/SearchForm';
import Loader from '../../components/Loader/Loader';
import { LinkNav } from './Movies.styled';

const Movies = () => {
  const [films, setFilms] = useState<IMovie[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery: string = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      setFilms([]);
      return;
    }
    if (searchQuery.trim() === '' || searchQuery === '') {
      toast.error('Enter valid search data');
      setFilms([]);
      return;
    }
    async function getMoviesBySearchQouery(searchQuery: string) {
      try {
        setIsFetching(true);
        const { results } = await getMoviesByName(searchQuery);
        setFilms(prevFilms => [...prevFilms, ...results]);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setIsFetching(false);
          setError(error.message);
          setFilms([]);
        }
      } finally {
        setIsFetching(false);
      }
    }
    getMoviesBySearchQouery(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (value: string) => {
    if (value.toLowerCase().trim() === '') {
      toast.error('Enter search data');
      return;
    }
    if (value.toLowerCase().trim() === searchQuery) {
      toast.error('You have the same request. Enter new...');
      return;
    }
    if (value.toLowerCase().trim() !== searchQuery) {
      setFilms([]);
      setSearchParams(value !== '' ? { query: value } : {});
    }
  };
  return (
    <>
      {error && <RequestError />}
      {!error && isFetching && <Loader />}
      <SearchForm value={searchQuery} onSubmit={handleSubmit} />
      {films.length !== 0 && (
        <ul>
          {films.map(({ id, title }) => (
            <li key={id}>
              <LinkNav to={`${id}`} state={{ from: location }}>
                {title}
              </LinkNav>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
