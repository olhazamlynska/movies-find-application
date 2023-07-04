import { IReview } from '../interfaces/AllCommonItefaces';

export const reviewsMapper = (review: IReview[]): IReview[] => {
  return review.map(({ author, content, id }) => ({
    author,
    content,
    id,
  }));
};
