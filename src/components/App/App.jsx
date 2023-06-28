import { NavLink, Routes, Route } from 'react-router-dom';
import { lazy,  Suspense } from 'react';
import css from './App.module.css';
const Home = lazy(() => import('pages/Home'))
const Movies = lazy(() => import('pages/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails'))
const Cast = lazy(() => import('components/Cast/Cast'))
const Rewiews = lazy(()=> import('components/Rewiews/Rewiews'))

export const App = () => {
  return ( 
    <div>
      <nav className={css.Nav}>
        <NavLink className={css.NavLink} to="/">Home</NavLink>
        <NavLink className={css.NavLink} to="/movies">Movies</NavLink>
      </nav>
      <main className={css.Main}>
      <Suspense fallback={<p>Loading...</p>}>    
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
           <Route path="cast" element={<Cast/>} />
           <Route path="rewiews" element={<Rewiews/>}/>
        </Route>  
      </Routes>
        </Suspense>
        </main>
    </div>
  );
};
