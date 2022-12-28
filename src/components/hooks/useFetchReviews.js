import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchReviewsById } from 'services/API';
import { reviewsMapper } from 'utils/reviewsMapper';

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    searchReviewsById(id).then(data => {
      const mapReviews = reviewsMapper(data);
      setReviews(mapReviews);
    });
  }, [id]);

  return reviews;
};
