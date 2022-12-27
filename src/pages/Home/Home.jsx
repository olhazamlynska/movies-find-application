import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import * as API from '../../services/API';
import { moviesMaper } from 'utils/moviesMapper';
import { List, Item, Poster, Container } from './Home.styled';

const Home = () => {
  const [films, setfilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function fetchmovies() {
      try {
        const { results } = await API.getTrendingMovies();
        const films = moviesMaper(results);

        setfilms(films);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchmovies();
  }, []);

  return (
    <Container>
      <h2>Tending movies today</h2>
      <List>
        {films.map(({ id, posterPath, title, name }) => (
          <Item key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              <Poster
                src={posterPath ? API.POSTER_URL + posterPath : 'No image'}
                alt={title}
                loading="lazy"
                width={250}
              />
              {title ? title : name}
            </Link>
          </Item>
        ))}
      </List>
      <Outlet />
    </Container>
  );
};
export default Home;
