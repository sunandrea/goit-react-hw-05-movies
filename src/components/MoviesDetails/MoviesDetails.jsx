import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovieById, getMovieCast, getMovieReviews } from 'Api/getMovies';
const MoviesDetails = ({ onCast, onReviews }) => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getMovieById(id).then(res => setMovie({ ...res.data }));
    getMovieCast(id).then(res => onCast(res.data.cast));
    getMovieReviews(id).then(res => onReviews(res.data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div>
      <Link to="/"> Go back</Link>
      <div>
        <img
          src={movie.backdrop_path}
          width="100px"
          height="100px"
          alt={movie.title}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>User Score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <div>
            {movie.genres &&
              movie.genres.map(el => <p key={el.id}>{el.name}</p>)}
          </div>
          <p></p>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

MoviesDetails.propTypes = {
  onCast: PropTypes.func.isRequired,
  onReviews: PropTypes.func.isRequired,
};

export default MoviesDetails;
