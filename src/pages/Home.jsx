import { useEffect, useState, lazy } from "react";
import { fetchTrendingMovies } from "API/FetchMovies";
import css from "./Pages.module.css";

const MoviesList = lazy(() => import("./MoviesList"));

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchTrendingMovies().then(films => {
			setMovies(films.results);
		});
	}, []);

	return (
		<div className={css.Trending}>
			<h1>Trending today</h1>
			<MoviesList movies={movies} />
		</div>
	);
};

export default Home;
