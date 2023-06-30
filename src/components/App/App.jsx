import { Routes, Route } from 'react-router-dom';
import { lazy,  Suspense } from 'react';

const Home = lazy(() => import('pages/Home'))
const Movies = lazy(() => import('pages/Movies/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('components/Cast/Cast'))
const Rewiews = lazy(() => import('components/Rewiews/Rewiews'))
const Layout = lazy(() => import('components/Layout/Layout'))

export const App = () => {
  return ( 
      <main>
      <Suspense fallback={<p>Loading...</p>}>    
          <Routes> 
            <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path = ":movieId" element={<MovieDetails />} >
           <Route path="cast" element={<Cast/>} />
           <Route path="rewiews" element={<Rewiews/>}/>
            </Route> 
             <Route path = "movies/:movieId" element={<MovieDetails />} >
           <Route path="cast" element={<Cast/>} />
           <Route path="rewiews" element={<Rewiews/>}/>
              </Route> 
            </Route>      
      </Routes>
        </Suspense>
        </main>
  
  );
};
