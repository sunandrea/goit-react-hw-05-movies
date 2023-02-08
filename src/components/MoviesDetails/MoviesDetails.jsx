import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getMovieById, getMovieCast, getMovieReviews } from 'Api/getMovies';
import css from './MoviesDetails.module.css';

const MoreInfoLink = styled(NavLink)`
  text-decoration: none;
  color: #120b3d;
  font-weight: 500;
  list-style: none;

  &.active {
    color: #a70960;
  }
  &:hover {
    color: #a70960;
  }
`;

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
      <Link className={css.goBackLink} to="/">
        Go back
      </Link>
      <div className={css.contentWrapper}>
        <img
          className={css.posterImg}
          src={
            movie.poster_path &&
            `https://image.tmdb.org/t/p/w500/` + movie.poster_path
          }
          width="100px"
          height="100px"
          alt={movie.title}
        />
        <div className={css.detailsWrapper}>
          <h1>{movie.title}</h1>
          <p>User Score: {Math.ceil(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul className={css.genresList}>
            {movie.genres &&
              movie.genres.map(el => (
                <li className={css.genresList} key={el.id}>
                  {el.name}
                </li>
              ))}
          </ul>
          <p></p>
        </div>
      </div>
      <ul className={css.linkList}>
        <li>
          <MoreInfoLink to="cast">Cast</MoreInfoLink>
        </li>
        <li>
          <MoreInfoLink to="reviews">Reviews</MoreInfoLink>
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
