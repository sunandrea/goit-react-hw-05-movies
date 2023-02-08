import PropTypes from 'prop-types';
const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.length > 1 ? (
        cast.map(actor => {
          return (
            <li key={actor.cast_id}>
              <img
                src={
                  actor.profile_path &&
                  `https://image.tmdb.org/t/p/w500/` + actor.profile_path
                }
                width="100px"
                height="100px"
                alt={actor.name}
              />
              <p>{actor.name}</p>
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
