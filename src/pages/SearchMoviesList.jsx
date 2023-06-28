import { Link ,useLocation } from 'react-router-dom';
import css from './Pages.module.css';
const SearchMoviesList = ({ movies }) => {

    const location = useLocation();
    
    return <ul className={css.SearchList}>
        {movies.map(movie => {
            return <li className={css.MuvieLink} key={movie.id}><Link className={css.MuvieLink} to={`${movie.id}`} state={{from: location}}>{movie.title}</Link></li>
        })}
    </ul>
}

export default SearchMoviesList;