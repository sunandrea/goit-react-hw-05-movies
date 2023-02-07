import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieListItem = ({ id, movie }) => {
  const location = useLocation();
  return (
    <li>
      <NavLink
        to={{
          pathname: location.pathname === '/movies' ? `${id} ` : `movies/${id}`,
        }}
      >
        <h2>{movie.title}</h2>
      </NavLink>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
};

export default MovieListItem;
