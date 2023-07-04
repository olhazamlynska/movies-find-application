import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchActorsById } from '../services/API';
import { IActor } from '../interfaces/AllCommonItefaces';

export const useFetchActors = () => {
  const [actors, setActors] = useState<IActor[]>([]);
  const { id } = useParams();

  useEffect(() => {
    async function getActorsById(id: number) {
      try {
        const result = await searchActorsById(id);
        setActors(result);
      } catch (error) {
        if (error instanceof Error) {
          setActors([]);
        }
      }
    }
    getActorsById(Number(id));
  }, [id]);

  return actors;
};
