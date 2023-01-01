import { useFetchActors } from 'components/hooks/useFetchActors';
import * as API from '../../services/API';
import { List, Item, Poster, Name } from './Cast.styled';
import { Text } from 'components/Reviews/Reviews.styled';

const Cast = () => {
  const actors = useFetchActors();

  return (
    <div>
      {actors.length === 0 && (
        <Text>There no information about actors yet...</Text>
      )}
      {actors && (
        <List>
          {actors.map(({ id, character, name, profilePath }) => (
            <Item key={id}>
              <Poster
                src={
                  profilePath
                    ? API.POSTER_URL + profilePath
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
