"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./movieDetail.module.css";
import { fetchMovieDetails } from "@/utils/fetchMovieApi";
import Link from "next/link";

const MovieDetail = () => {
  const pathname = usePathname();
  const id = pathname.split("/movie/details/")[1];

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [id]);

  if (loading)
    return (
      <div className={"loading"} role="alert">
        <div className="loader" aria-label="Loading movie details"></div>
      </div>
    );
  if (error)
    return (
      <div className={"error"} role="alert">
        Error: {error}
      </div>
    );

  return (
    <section className={styles.section}>
      <nav aria-label="Breadcrumb">
        <ol className={styles.breadcrumbs}>
          <li>
            <Link href="/" aria-label="Go to Movies">
              Movies
            </Link>
          </li>
          <li aria-current="page">{movie.Title}</li>
        </ol>
      </nav>
      <div className={styles.movieDetail}>
        {movie.Title && (
          <>
            <div className={styles.poster}>
              <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
            </div>
            <div className={styles.details}>
              <h1>{movie.Title}</h1>
              <h2>{movie.Plot}</h2>
              <p>Rating: {movie.imdbRating}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MovieDetail;
