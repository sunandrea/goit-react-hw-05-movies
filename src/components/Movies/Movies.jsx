import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviesList from 'pages/MoviesList';

const Movies = ({ onSubmitHanler, movies }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  // const queryName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const onChange = evt => {
    setInputValue(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    onSubmitHanler(inputValue);
    updateQueryString(inputValue);
    setInputValue('');
  };
  // console.log(queryName);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={inputValue}></input>
        <button type="submit">Search</button>
      </form>
      <MoviesList list={movies} />
    </>
  );
};

Movies.propTypes = {
  onSubmitHanler: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Movies;
