import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovieById } from '../services/API';
import { IMovieById } from '../interfaces/AllCommonItefaces';

export const useFetchFilm = () => {
  const [film, setFilm] = useState<IMovieById | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function getFilmId(id: number) {
      try {
        const result = await searchMovieById(id);
        setFilm(result);
      } catch (error) {
        if (error instanceof Error) {
          setFilm(null);
        }
      }
    }
    getFilmId(Number(id));
  }, [id]);

  return film;
};
