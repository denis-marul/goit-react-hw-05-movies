import { Link ,useLocation } from 'react-router-dom';
import css from './Pages.module.css';
const MoviesList = ({ movies }) => {

    const location = useLocation();
    console.log(location);
    return <ul className={css.SearchList}>
        {movies.map(movie => {
            return <li className={css.MuvieLink} key={movie.id}>
                <Link className={css.MuvieLink}
                    to={`${movie.id}`}
                    state={{ from: location }}>{movie.title}</Link>
            </li>
        })}
    </ul>
};

export default MoviesList;