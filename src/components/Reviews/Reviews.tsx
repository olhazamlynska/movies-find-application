import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchReviewsById } from '../../services/API';
import RequestError from '../RequestError';
import { Item, Name, Text, List } from './Reviews.styled';
import { IReview } from '../../interfaces/AllCommonItefaces';

// Хук для запиту на інфо
//import { useFetchReviews } from 'components/hooks/useFetchReviews';

const Reviews = () => {
  //Виклик хука
  //const reviews = useFetchReviews();

  const [reviews, setReviews] = useState<IReview[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function getReviewsById(id: number) {
      try {
        const result = await searchReviewsById(id);

        setReviews(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setReviews([]);
        }
      }
    }
    getReviewsById(Number(id));
  }, [id]);

  return (
    <>
      {error && <RequestError />}

      {reviews.length > 0 && !error && (
        <div>
          {reviews && (
            <List>
              {reviews.map(({ author, content, id }) => (
                <Item key={id}>
                  <Name>
                    Author: <span>{author}</span>
                  </Name>
                  <Text>{content}</Text>
                </Item>
              ))}
            </List>
          )}
        </div>
      )}
      {reviews.length === 0 && !error && (
        <Text>There no reviews yet...Please, try another film!</Text>
      )}
    </>
  );
};
export default Reviews;
