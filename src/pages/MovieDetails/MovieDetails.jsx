import { useParams } from "react-router-dom";
import { fetchMoveiDetails } from "API/FetchMovies";
import { useEffect, useRef, useState, Suspense } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import css from "./MovieDetails.module.css";
import thumbnail from "DefaultPics/default-thumbnail.jpg";
const MovieDetails = () => {
	const location = useLocation();
	const backLinkLock = useRef(location.state?.from ?? "/");

	const [movieParams, setMovieParams] = useState(null);
	const params = useParams();
	useEffect(() => {
		fetchMoveiDetails(params.movieId).then(param => {
			setMovieParams({ ...param });
		});
	}, [params]);
	if (!movieParams) {
		return;
	}
	const year = `${movieParams.release_date}`;
	const procentage = `${Math.round(movieParams.vote_average * 100)}`;

	return (
		<div className={css.MovieDetails}>
			<Link to={backLinkLock.current}>
				<button className={css.BackBtn} type="button">
					Go Back
				</button>
			</Link>
			<div className={css.MovieCard}>
				<img
					className={css.MovieImg}
					src={movieParams.poster_path ? "https://image.tmdb.org/t/p/w500" + movieParams.poster_path : thumbnail}
					alt={movieParams.title}
				/>

				<div className={css.MovieInfo}>
					<h2>
						{movieParams.title} ({year.slice(0, 4)})
					</h2>
					<p>User Score: {procentage.slice(0, 2)}%</p>
					<h3>Overview</h3>
					<p>{movieParams.overview}</p>
					<h3>Genres</h3>
					<div className={css.Genres}>
						{movieParams.genres &&
							movieParams.genres.map(genre => {
								return (
									<p className={css.GenreItem} key={genre.id}>
										{genre.name}
									</p>
								);
							})}
					</div>
				</div>
			</div>
			<div className={css.AddInfo}>
				<h3>Additional information</h3>
				<ul className={css.AddList}>
					<li>
						<Link className={css.AddListLink} to="cast">
							Cast
						</Link>
					</li>
					<li>
						<Link className={css.AddListLink} to="rewiews">
							Rewiews
						</Link>
					</li>
				</ul>

				<Suspense fallback={<p>Loading...</p>}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	);
};

export default MovieDetails;
