import axios from 'axios';

const API_KEY = 'd3c6318b20cf2f3824f6b98f722f500e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTrendMovies = () => {
  return instance.get(`trending/movie/day?api_key=${API_KEY}`);
};

export const getMoviesByName = query => {
  return instance.get(`search/movie?api_key=${API_KEY}&query=${query}`);
};

export const getMovieById = id => {
  return instance.get(`movie/${id}?api_key=${API_KEY}`);
};

export const getMovieCast = id => {
  return instance.get(`movie/${id}/credits?api_key=${API_KEY}`);
};

export const getMovieReviews = id => {
  return instance.get(`movie/${id}/reviews?api_key=${API_KEY}`);
};
