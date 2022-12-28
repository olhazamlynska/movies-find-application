import { useFetchFilm } from 'components/hooks/useFetchDetails';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import * as API from '../../services/API';
import { Container, LinkNav } from './MovieDetails.styled';

const MovieDetails = () => {
  const film = useFetchFilm();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go back
      </button>
      {film ? (
        <Container>
          <div>
            <h2>
              {film.title} ({new Date(film.release_date).getFullYear()})
            </h2>
            <img
              src={
                film.poster_path
                  ? API.POSTER_URL + film.poster_path
                  : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
              }
              alt={film.title}
              loading="lazy"
              width={250}
            />
          </div>
          <ul>
            <li>
              <h3>User score</h3>
              <p>{film.vote_average.toFixed(1)}</p>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{film.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <ul>
                {film.genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </ul>
            </li>
          </ul>
          <>
            <LinkNav to="cast" state={location.state}>
              Cast
            </LinkNav>

            <LinkNav to="reviews" state={location.state}>
              Reviews
            </LinkNav>
            <Outlet />
          </>
        </Container>
      ) : (
        <p>Sorry, there no information about film! Please try another!</p>
      )}
    </>
  );
};
export default MovieDetails;
