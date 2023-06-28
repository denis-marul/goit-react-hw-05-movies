import { useEffect, useState, lazy, Suspense } from "react";
import { useSearchParams} from "react-router-dom";
import FetchMovies from 'API/FetchMovies'
import css from './Movies.module.css';

const SearchMoviesList = lazy(() => import('./SearchMoviesList'))

const Movies = () => {
    
  const [movieText, setMovieText] = useState('')
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  
  
 

  const handleMovieTextChange = e => {
         
    const { value } = e.currentTarget;
    setMovieText(value.toLowerCase())
  };
  

  const onSubmit = e => {
    e.preventDefault();
    if (movieText.trim() === '') {
      alert('Please fill in the form.');
      setError(false)
      return;
    }
    setSearchParams({ query: movieText })
    setMovieText('')
  };

  useEffect(() => {
    if (query === null) {
      setError(false)
      setMovies([])
      return;
    }
    FetchMovies(query)
      .then(films => {
        setMovies(films.results)
        setError(false)
        if (films.results.length === 0) {
          setError(true)
        }
      })
  }, [query]);


    
  return <div className={css.MoviesForm}>
    <form onSubmit={onSubmit}>
      <input
        className={css.MoviesInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={movieText}
        onChange={handleMovieTextChange}
      />
      <button className={css.MoviesButton} type="submit">Search</button>
    </form>
    {error && <h1>Ups.. We found no resolts.</h1>}
       
       <Suspense fallback={<p>Loading...</p>} >
            <SearchMoviesList movies={movies} />
       </Suspense>
    
  </div>
};

export default Movies;