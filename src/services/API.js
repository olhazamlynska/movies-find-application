import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'd8f6c8593dac3d35659165785d083845';

const TRENDIND_PATH = '/trending/all/day';
const SEARCH_PATH = '/search/movie';
const SEARCH_ALL_INFO_PATH = '/movies/get-movie-details';
const SEARCH_ACTORS_PATH = '/movies/get-movie-credits';
const SEARCH_REVIEWS_PATH = '/movies/get-movie-reviews';

//https://api.themoviedb.org/3/trending/all/day?page=1&api_key=d8f6c8593dac3d35659165785d083845

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${TRENDIND_PATH}?page=1&api_key=${API_KEY}`
  );
  return response.data;
};

export const searchMovies = async (search, page) => {
  const response = await axios.get(
    `${SEARCH_PATH}?q=${search}&page=${page}&api_key=${API_KEY}`
  );
  return response.data;
};
