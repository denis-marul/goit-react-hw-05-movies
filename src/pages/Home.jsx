// import { useEffect, useState} from 'react';
// import {fetchTrendingMovies} from 'API/FetchMovies';
// import { Link, useLocation } from 'react-router-dom';

// import css from './Pages.module.css';
// const Home = () => {

//     const [movies, setMovies] = useState([]);
//     const location = useLocation();
    
//     useEffect(() => {
//         fetchTrendingMovies().then(films => {
//             setMovies(films.results)
//         });
        
//     }, [])
    
//     return <div className={css.Trending}>
//         <h1>Trending today</h1>
    
     
//         <ul>
//             {movies.map(movie => {
//                 return <li className={css.MuvieLink} key={movie.id}>
//                     <Link className={css.MuvieLink} to={`movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link></li>
//             })};
//         </ul>
      
   
//     </div>
// };

// export default Home;



import { useEffect, useState, lazy} from 'react';
import {fetchTrendingMovies} from 'API/FetchMovies';
import css from './Pages.module.css';

const MoviesList = lazy(() => import('./MoviesList'))

const Home = () => {

    const [movies, setMovies] = useState([]);
   
    
    useEffect(() => {
        fetchTrendingMovies().then(films => {
            setMovies(films.results)
        });
        
    }, [])
    
    return <div className={css.Trending}>
        <h1>Trending today</h1>
    
     
        <MoviesList movies={movies} />
      
   
    </div>
}

export default Home;