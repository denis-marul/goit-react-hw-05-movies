import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import FetchRewiews from 'API/FetchRewiews';

const Rewiews = () => {
    const [rewiews, setRewiews] = useState([]);

   
    const params = useParams();

    useEffect(() => {
        FetchRewiews(params.movieId).then(resp => {
            setRewiews(resp);
        })
    }, [params])

  
    return <div>
        {rewiews.results && rewiews.results.length === 0 ? <p>We don't have any rewiews for this movie.</p> : <ul>{rewiews.results && rewiews.results.map(result => {
            return <li key={result.id}>
                <p>Username: {result.author_details.username}</p>
                <p>Rewiew: {result.content}</p>
            </li>
        })}</ul>}
        
    </div>
  
    
};

export default Rewiews;
