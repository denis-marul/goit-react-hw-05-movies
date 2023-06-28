import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import FetchCast from 'API/FetchCast';
import css from './Cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState([]);

   
    const params = useParams()
    useEffect(() => {
        FetchCast(params.movieId).then(actors => {
            setCast(actors.cast);
        })
    }, [params])

    return <ul className={css.CastList}>
        {cast && cast.map(actor => {
            return <li key={actor.credit_id}>
                {actor.profile_path && <img width="300" height="450" src={'https://image.tmdb.org/t/p/w500' + actor.profile_path} alt={actor.original_name} />}
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
            </li>
        })}
    </ul>
};

export default Cast;