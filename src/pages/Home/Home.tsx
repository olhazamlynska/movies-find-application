import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies, POSTER_URL } from '../../services/API';
import { IMovie } from '../../interfaces/AllCommonItefaces';
import Loader from '../../components/Loader';
import RequestError from '../../components/RequestError';

import { List, Item, Poster, LinkNav, Title, Name } from './Home.styled';
const Home = () => {
  const [films, setfilms] = useState<IMovie[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    async function fetchmovies() {
      try {
        setIsFetching(true);
        const { results } = await getTrendingMovies();

        setfilms(results);
      } catch (error) {
        if (error instanceof Error) {
          setIsFetching(false);
          setError(error.message);
        }
      } finally {
        setIsFetching(false);
      }
    }
    fetchmovies();
  }, []);

  return (
    <>
      {error && <RequestError />}
      {!error && isFetching && <Loader />}
      <Title>Tending movies today</Title>
      <List>
        {films.map(({ id, poster_path, title, name }) => (
          <Item key={id}>
            <LinkNav to={`movies/${id}`} state={{ from: location }}>
              <Poster
                src={
                  poster_path
                    ? POSTER_URL + poster_path
                    : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                }
                alt={title}
                loading="lazy"
                width={250}
              />
              <Name>{title ? title : name}</Name>
            </LinkNav>
          </Item>
        ))}
      </List>
    </>
  );
};
export default Home;
