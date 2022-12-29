import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as API from '../../services/API';
import { moviesMapper } from 'utils/moviesMapper';
import { List, Item, Poster, LinkNav, Title, Name } from './Home.styled';

const Home = () => {
  const [films, setfilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function fetchmovies() {
      try {
        const { results } = await API.getTrendingMovies();
        const films = moviesMapper(results);

        setfilms(films);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchmovies();
  }, []);

  return (
    <>
      <Title>Tending movies today</Title>
      <List>
        {films.map(({ id, posterPath, title, name }) => (
          <Item key={id}>
            <LinkNav to={`movies/${id}`} state={{ from: location }}>
              <Poster
                src={
                  posterPath
                    ? API.POSTER_URL + posterPath
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
