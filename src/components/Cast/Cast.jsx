import PropTypes from 'prop-types';
import css from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <ul className={css.castList}>
      {cast.length > 1 ? (
        cast.map(actor => {
          return (
            <li className={css.castItem} key={actor.cast_id}>
              <img
                src={
                  actor.profile_path &&
                  `https://image.tmdb.org/t/p/w500/` + actor.profile_path
                }
                width="200px"
                height="240px"
                alt={actor.name}
              />
              <p className={css.avc}>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </ul>
  );
};

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default Cast;
