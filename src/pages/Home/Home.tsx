import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as API from '../../services/API';
import { List, Item, Poster, LinkNav, Title, Name } from './Home.styled';
import RequestError from '../../components/RequestError';
import { IMovie } from '../../interfaces/AllCommonItefaces';

const Home = () => {
  const [films, setfilms] = useState<IMovie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    async function fetchmovies() {
      try {
        const { results } = await API.getTrendingMovies();

        setfilms(results);
      } catch (error: any) {
        setError(error);
      }
    }
    fetchmovies();
  }, []);

  return (
    <>
      {error && <RequestError />}
      <Title>Tending movies today</Title>
      <List>
        {films.map(({ id, poster_path, title, name }) => (
          <Item key={id}>
            <LinkNav to={`movies/${id}`} state={{ from: location }}>
              <Poster
                src={
                  poster_path
                    ? API.POSTER_URL + poster_path
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
