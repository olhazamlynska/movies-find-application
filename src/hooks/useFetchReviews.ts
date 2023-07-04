import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchReviewsById } from '../services/API';
import { IReview } from '../interfaces/AllCommonItefaces';

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const { id } = useParams();

  useEffect(() => {
    async function getReviewId(id: number) {
      try {
        const result = await searchReviewsById(id);
        setReviews(result);
      } catch (error) {
        if (error instanceof Error) {
          setReviews([]);
        }
      }
    }
    getReviewId(Number(id));
  }, [id]);

  return reviews;
};
