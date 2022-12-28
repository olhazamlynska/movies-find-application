import { useFetchActors } from 'components/hooks/useFetchActors';
import { Outlet } from 'react-router-dom';
import * as API from '../../services/API';

const Cast = () => {
  const actors = useFetchActors();

  return (
    <div>
      {actors && (
        <ul>
          {actors.map(({ id, character, name, profilePath }) => (
            <li key={id}>
              <img
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
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
};
export default Cast;
