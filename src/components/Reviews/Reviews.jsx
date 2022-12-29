import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchReviewsById } from 'services/API';
import { reviewsMapper } from 'utils/reviewsMapper';
import { Item, Name, Text, List } from './Reviews.styled';
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
    <>
      {reviews.length === 0 && error && (
        <Text>There no reviews yet...Please, try another film!</Text>
      )}
      {reviews.length > 0 && !error && (
        <div>
          {reviews && (
            <List>
              {reviews.map(({ author, review, id }) => (
                <Item key={id}>
                  <Name>
                    Author: <span>{author}</span>
                  </Name>
                  <Text>{review}</Text>
                </Item>
              ))}
            </List>
          )}
        </div>
      )}
    </>
  );
};
export default Reviews;
