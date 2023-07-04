import { useFetchActors } from '../../hooks/useFetchActors';
import * as API from '../../services/API';
import { List, Item, Poster, Name } from './Cast.styled';
import { Text } from '../Reviews/Reviews.styled';

const Cast: React.FC = () => {
  const actors = useFetchActors();

  return (
    <div>
      {actors.length === 0 && (
        <Text>There no information about actors yet...</Text>
      )}
      {actors && (
        <List>
          {actors.map(({ id, character, name, profile_path }) => (
            <Item key={id}>
              <Poster
                src={
                  profile_path
                    ? API.POSTER_URL + profile_path
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
    </div>
  );
};
export default Cast;
