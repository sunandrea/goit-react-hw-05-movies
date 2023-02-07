import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Header } from './Header/Header';
import { getTrendMovies, getMoviesByName } from 'Api/getMovies';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MoviesDetails = lazy(() => import('./MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [moviesByName, setMoviesByName] = useState([]);
  const [query, setQuery] = useState('');
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getTrendMovies().then(res => {
      setPopularMovies(res.data.results);
    });
  }, []);

  useEffect(() => {
    if (query === '') {
      return;
    }
    getMoviesByName(query).then(res => {
      setMoviesByName(res.data.results);
    });
  }, [query]);

  const onSubmitHandler = data => {
    setQuery(data);
  };

  const onCastClick = data => {
    setCast(data);
  };

  const onReviewsClick = data => {
    setReviews(data);
  };

  return (
    <>
      <Header />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home movies={popularMovies} />}></Route>
          <Route
            path="movies"
            element={
              <Movies movies={moviesByName} onSubmitHanler={onSubmitHandler} />
            }
          ></Route>
          <Route
            element={
              <MoviesDetails onCast={onCastClick} onReviews={onReviewsClick} />
            }
            path="movies/:id"
          >
            <Route element={<Cast cast={cast} />} path="cast" />
            <Route element={<Reviews reviews={reviews} />} path="reviews" />
          </Route>
          <Route
            path="*"
            element={
              <main>
                <p>There is nothing here</p>
              </main>
            }
          />
        </Routes>
        <Outlet />
      </Suspense>
    </>
  );
};
