import {  useState, useEffect, lazy } from "react";
import { useSearchParams} from "react-router-dom";
import { fetchMovies } from 'API/FetchMovies'
import css from './Movies.module.css';

const MoviesList = lazy(() => import('pages/MoviesList'))
const Searchbar = lazy(() => import('components/Searchbar/Searchbar'))

const Movies = () => {
  
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState([]);
  
  const submit = (films) => {
    console.log(films);
    
   setSearchParams({ query: films })
}
  useEffect(() => {
    
    if (query === null) {
      setError(false)
      setMovies([])
      return;
    }
    fetchMovies(query)
      .then(films => {
        setMovies(films.results)
          setError(false)
          
        if (films.results.length === 0) {
          setError(true)
        }
      })
      
  }, [query]);


    
  return <div className={css.MoviesForm}>
    
    <Searchbar Submit={submit} />
    {error && <h1>Ups.. We found no resolts.</h1>} 
    <MoviesList movies={movies}/>
      
  </div>
};

export default Movies;