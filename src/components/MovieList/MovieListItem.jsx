import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import css from './MovieList.module.css';

const ItemLink = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: #320975;
  font-weight: 500;

  &.active {
    color: #a70960;
  }
  &:hover,
  &:focus {
    color: #a70960;
    outline: none;
  }
`;
const MovieListItem = ({ id, movie }) => {
  const location = useLocation();

  return (
    <li className={css.listItem}>
      <img
        className={css.listImg}
        src={
          movie.poster_path &&
          `https://image.tmdb.org/t/p/w500/` + movie.poster_path
        }
        alt={movie.title}
        height="280px"
      />
      <ItemLink
        className={css.listLink}
        to={{
          pathname: location.pathname === '/movies' ? `${id} ` : `movies/${id}`,
        }}
        state={{ from: location.pathname }}
      >
        <h2 className={css.movieTittle}>{movie.title}</h2>
      </ItemLink>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
};

export default MovieListItem;
