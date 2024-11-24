"use client";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "@/utils/fetchMovieApi";
import Link from "next/link";
import styles from "./movieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMovies("Avengers");
        setMovies(movieData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading)
    return (
      <div className="loading" role="alert">
        <div className="loader" aria-label="Loading movies"></div>
      </div>
    );
  if (error)
    return (
      <div className="error" role="alert">
        Error: {error}
      </div>
    );

  return (
    <div className={styles.movieList}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link
              href={`/movie/details/${movie.imdbID}`}
              aria-label={`View details for ${movie.Title}`}
            >
              <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
              {/* <p>{movie.Title}</p> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
