//import { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
//import { searchMovieById } from 'services/API';

//export const useFetchFilm = () => {
//  const [film, setFilm] = useState(null);

//  const { id } = useParams();

//  useEffect(() => {
//    searchMovieById(id)
//      .then(setFilm)
//      .catch(error => {
//        console.log(error.message);
//        setFilm([]);
//      });
//  }, [id]);

//  return film;
//};
