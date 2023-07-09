const BASE_URL = "https://api.themoviedb.org/3/";
const MY_API_KEY = "4acb178a3b7e23750170cd51a9ede7a5";

export const fetchMovies = query => {
	const resp = fetch(
		`${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${MY_API_KEY}`,
	).then(response => {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(new Error("No results has been found."));
	});
	return resp;
};

export const fetchCast = movieId => {
	const resp = fetch(`${BASE_URL}movie/${movieId}/credits?language=en-US&api_key=${MY_API_KEY}`).then(response => {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(new Error("No results has been found."));
	});
	return resp;
};

export const fetchMoveiDetails = movieId => {
	const resp = fetch(`${BASE_URL}movie/${movieId}?language=en-US&api_key=${MY_API_KEY}`).then(response => {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(new Error("No results has been found."));
	});
	return resp;
};

export const fetchRewiews = movieId => {
	const resp = fetch(`${BASE_URL}movie/${movieId}/reviews?language=en-US&page=1&api_key=${MY_API_KEY}`).then(
		response => {
			if (response.ok) {
				return response.json();
			}
			return Promise.reject(new Error("No results has been found."));
		},
	);
	return resp;
};

export const fetchTrendingMovies = () => {
	const resp = fetch(`${BASE_URL}trending/movie/day?language=en-US&api_key=${MY_API_KEY}`).then(response => {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(new Error("No results has been found."));
	});
	return resp;
};
