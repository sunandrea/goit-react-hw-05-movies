import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 1 ? (
        reviews.map(review => {
          return (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

Reviews.propTypes = {
  review: PropTypes.array,
};
export default Reviews;
