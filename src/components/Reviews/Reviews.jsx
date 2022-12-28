import { useFetchReviews } from 'components/hooks/useFetchReviews';
import { Outlet } from 'react-router-dom';

const Reviews = () => {
  const reviews = useFetchReviews();

  return (
    <div>
      {reviews && (
        <ul>
          {reviews.map(({ author, review, id }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{review}</p>
            </li>
          ))}
        </ul>
      )}

      <Outlet />
    </div>
  );
};
export default Reviews;
