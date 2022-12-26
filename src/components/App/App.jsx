import { useState, useEffect } from 'react';
import * as API from 'services/API';
import toast, { Toaster } from 'react-hot-toast';
import { filmMaper } from 'utils/moviesMapper';
//import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { FilmsList } from 'components/ImageGallery/ImageGallery';

//import { Searchbar } from 'components/Searchbar/Searchbar';

export function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(null);

  //const handleSubmit = searchQuery => {
  //  if (searchQuery.trim() === '') {
  //    toast('Please, enter search data');
  //    return;
  //  }

  //  if (query === searchQuery) {
  //    toast.error('You have the same search. Please try another word');
  //    return;
  //  }

  //  setImages([]);
  //  setQuery(searchQuery);
  //  setPage(1);
  //};

  //const loadMore = () => {
  //  setPage(prevState => prevState + 1);
  //};

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results, total_results: total } = await API.getTrendingMovies();

        const films = filmMaper(results);
        console.log(films);
        setMovies(films);
        setTotal(total);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      {error && <p>Something went wrong, try again!</p>}
      {isLoading && <Loader />}
      <FilmsList movies={movies} />
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}
