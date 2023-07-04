import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieById, POSTER_URL } from '../../services/API';
import { IMovieById } from '../../interfaces/AllCommonItefaces';
import Box from '../../components/Box';
import RequestError from '../../components/RequestError';
import Loader from '../../components/Loader/Loader';
import { LinkNav, BackBtn, List, Item } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState<IMovieById | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function fetchMovieById(id: number) {
      try {
        setIsFetching(true);
        const result = await getMovieById(id);
        setMovie(result);
      } catch (error) {
        if (error instanceof Error) {
          setIsFetching(false);
          setError(error.message);
          setMovie(null);
        }
      } finally {
        setIsFetching(false);
      }
    }
    fetchMovieById(Number(id));
  }, [id]);

  return (
    <Box as={'div'} pl={[7]}>
      <BackBtn
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go back
      </BackBtn>
      {!movie && error && <RequestError />}
      {!error && isFetching && <Loader />}
      {movie && (
        <Box as={'div'}>
          <h2>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h2>
          <Box as={'div'} display="flex">
            <img
              src={
                movie.poster_path
                  ? POSTER_URL + movie.poster_path
                  : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
              }
              alt={movie.title}
              loading="lazy"
              width={250}
            />

            <List>
              <Item>
                <h3>User score</h3>
                <p>{movie.vote_average.toFixed(1)}</p>
              </Item>
              <Item>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </Item>
              <Item>
                <h3>Genres</h3>
                <ul>
                  {movie.genres.map(({ id, name }) => {
                    return <li key={id}>{name}</li>;
                  })}
                </ul>
              </Item>
            </List>
          </Box>
          <Box as={'div'} mt={[4]}>
            <LinkNav to="cast" state={location.state}>
              Cast
            </LinkNav>
            <LinkNav to="reviews" state={location.state}>
              Reviews
            </LinkNav>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default MovieDetails;
