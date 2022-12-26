import PropTypes from 'prop-types';
import { FilmGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const FilmsList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, posterPath, releaseDate }) => (
        <FilmGalleryItem
          key={id}
          title={title}
          posterPath={posterPath}
          releaseDate={releaseDate}
        />
      ))}
    </ul>
  );
};

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      posterPath: PropTypes.string,
      releaseDate: PropTypes.string,
    })
  ).isRequired,
};
