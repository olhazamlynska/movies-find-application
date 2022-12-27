import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMoviesById } from 'services/API';

export const useFetchFilm = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    searchMoviesById(id).then(setFilm);
  }, [id]);

  return film;
};
