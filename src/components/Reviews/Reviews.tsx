import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/API';
import { IReview } from '../../interfaces/AllCommonItefaces';
import RequestError from '../RequestError';
import Loader from '../Loader/Loader';
import { Item, Name, Text, List } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchReviewsById(id: number) {
      try {
        setIsFetching(true);
        const result = await getReviewsById(id);

        setReviews(result);
      } catch (error) {
        if (error instanceof Error) {
          setIsFetching(false);
          setError(error.message);
          setReviews([]);
        }
      } finally {
        setIsFetching(false);
      }
    }
    fetchReviewsById(Number(id));
  }, [id]);

  return (
    <>
      {error && <RequestError />}
      {!error && isFetching && <Loader />}
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
