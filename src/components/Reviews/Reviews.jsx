import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchReviewsById } from 'services/API';
import { reviewsMapper } from 'utils/reviewsMapper';

// Хук для запиту на інфо
//import { useFetchReviews } from 'components/hooks/useFetchReviews';

const Reviews = () => {
  //Виклик хука
  //const reviews = useFetchReviews();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    searchReviewsById(id)
      .then(data => {
        const mapReviews = reviewsMapper(data);
        setReviews(mapReviews);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
        setReviews([]);
      });
  }, [id]);

  return (
    <div>
      {reviews !== [] ? (
        <ul>
          {reviews.map(({ author, review, id }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{review}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>The no reviews yet!</p>
      )}
    </div>
  );
};
export default Reviews;
