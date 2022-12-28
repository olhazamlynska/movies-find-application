import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchActorsById } from 'services/API';
import { actorsMapper } from 'utils/actorsMapper';

export const useFetchActors = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    searchActorsById(id)
      .then(({ cast }) => {
        const mapActors = actorsMapper(cast);
        setActors(mapActors);
      })
      .catch(error => {
        console.log(error.message);
        setActors([]);
      });
  }, [id]);

  return actors;
};
