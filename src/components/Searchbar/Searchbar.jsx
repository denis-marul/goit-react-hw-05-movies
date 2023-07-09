import css from "./Searchbar.module.css";
import { useState } from "react";

const Searchbar = ({ Submit }) => {
	const [movieText, setMovieText] = useState("");

	const handleMovieTextChange = e => {
		const { value } = e.currentTarget;
		setMovieText(value.toLowerCase());
	};

	const onSubmit = e => {
		e.preventDefault();

		if (movieText.trim() === "") {
			alert("Please fill in the form.");

			return;
		}
		Submit(movieText);
		setMovieText("");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					className={css.MoviesInput}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search movies"
					value={movieText}
					onChange={handleMovieTextChange}
				/>
				<button className={css.MoviesButton} type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default Searchbar;
