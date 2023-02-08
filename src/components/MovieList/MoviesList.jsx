import PropTypes from 'prop-types';

import MovieListItem from 'components/MovieList/MovieListItem';
import css from './MovieList.module.css';
const MoviesList = ({ title, list }) => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {list && (
        <ul className={css.list}>
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
