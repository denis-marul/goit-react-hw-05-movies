const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_API_KEY = '4acb178a3b7e23750170cd51a9ede7a5';
const SEARCH_TYPE = 'movie';

export default function FetchMoveiDetails(movieId) {
    const resp = fetch(`${BASE_URL}${SEARCH_TYPE}/${movieId}?language=en-US&api_key=${MY_API_KEY}`)
        .then(response => {
           if (response.ok) {
               return response.json();
           }
           return Promise.reject(
               new Error("No results has been found."),
           );
        })
    return resp;
}