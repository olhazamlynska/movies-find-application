import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActorsById, POSTER_URL } from '../../services/API';
import { IActor } from '../../interfaces/AllCommonItefaces';
import { List, Item, Poster, Name } from './Cast.styled';
import { Text } from '../Reviews/Reviews.styled';
import RequestError from '../RequestError';
import Loader from '../Loader';

const Cast: React.FC = () => {
  const [actors, setActors] = useState<IActor[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchActorsById(id: number) {
      try {
        setIsFetching(true);
        const result = await getActorsById(id);
        setActors(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setIsFetching(false);
          setActors([]);
        }
      } finally {
        setIsFetching(false);
      }
    }
    fetchActorsById(Number(id));
  }, [id]);

  return (
    <>
      {error && <RequestError />}
      {actors.length === 0 && (
        <Text>There no information about actors yet...</Text>
      )}
      {!error && isFetching && <Loader />}
      {actors && (
        <List>
          {actors.map(({ id, character, name, profile_path }) => (
            <Item key={id}>
              <Poster
                src={
                  profile_path
                    ? POSTER_URL + profile_path
                    : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                }
                alt={name}
                loading="lazy"
                width={250}
                height={200}
              />
              <Name>{name}</Name>
              <Name>{character}</Name>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
export default Cast;
