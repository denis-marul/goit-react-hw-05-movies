import { useEffect, useState, Suspense } from 'react';
import fetchTrendingMovies from 'API/FetchTrendingMovies';
import { Link, useLocation } from 'react-router-dom';
import css from './Pages.module.css';
const Home = () => {

    const [movies, setMovies] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        fetchTrendingMovies().then(films => {
            setMovies(films.results)   
        });
        
    },[])
    
    return<div className={css.Trending}>
        <h1>Trending today</h1>
    
        <Suspense fallback={<p>Loading...</p>} >
             <ul>
        {movies.map(movie => {
            return <li className={css.MuvieLink} key={movie.id}><Link className={css.MuvieLink} to={`movies/${movie.id}`} state={{from: location}}>{movie.title}</Link></li>
        })}
        </ul>
       </Suspense>
   
        </div>
}

export default Home;