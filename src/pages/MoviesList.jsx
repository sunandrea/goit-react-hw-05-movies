import PropTypes from 'prop-types';

import MovieListItem from 'components/MovieListItem/MovieListItem';
const MoviesList = ({ title, list }) => {
  return (
    <>
      <h2>{title}</h2>
      {list && (
        <ul>
          {list.map(movie => (
            <MovieListItem key={movie.id} id={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </>
  );
};

MoviesList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default MoviesList;
