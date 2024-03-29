import axios from 'axios';
import {
  IActor,
  IReview,
  IMovieById,
  IMoviesData,
} from '../interfaces/AllCommonItefaces';
import { actorsMapper } from '../utils/actorsMapper';
import { reviewsMapper } from '../utils/reviewsMapper';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'd8f6c8593dac3d35659165785d083845';

const TRENDIND_PATH = '/trending/all/day';
const SEARCH_PATH = '/search/movie';
const SEARCH_ALL_INFO_PATH = '/movie';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrendingMovies = async (): Promise<IMoviesData> => {
  const response = await axios.get(
    `${TRENDIND_PATH}?page=1&api_key=${API_KEY}`
  );
  return response.data;
};

export const getMoviesByName = async (search: string): Promise<IMoviesData> => {
  const response = await axios.get(
    `${SEARCH_PATH}?query=${search}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );

  return response.data;
};

export const getMovieById = async (id: number): Promise<IMovieById> => {
  const response = await axios.get(
    `${SEARCH_ALL_INFO_PATH}/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const getActorsById = async (id: number): Promise<IActor[]> => {
  const response = await axios.get(
    `${SEARCH_ALL_INFO_PATH}/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const actor = actorsMapper(response.data.cast);
  return actor;
};

export const getReviewsById = async (id: number): Promise<IReview[]> => {
  const response = await axios.get(
    `${SEARCH_ALL_INFO_PATH}/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  const review = reviewsMapper(response.data.results);
  return review;
};
