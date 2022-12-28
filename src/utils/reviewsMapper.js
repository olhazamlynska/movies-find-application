export const reviewsMapper = ({ results }) => {
  return results.map(({ author, content: review, id }) => ({
    author,
    review,
    id,
  }));
};
