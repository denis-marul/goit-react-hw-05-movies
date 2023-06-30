import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchCast } from 'API/FetchMovies';
import  thumbnail  from 'DefaultPics/default-thumbnail.jpg';

const Cast = () => {
    const [cast, setCast] = useState([]);

   
    const params = useParams()
    useEffect(() => {
        fetchCast(params.movieId).then(actors => {
            setCast(actors.cast);
        })
    }, [params])

    return <ul >
        {cast && cast.map(actor => {
            return <li key={actor.credit_id}>
                <img width="300"
                    height="450"
                    src={actor.profile_path ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path : thumbnail}
                    alt={actor.original_name} />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
            </li>
        })}
    </ul>
};

export default Cast;