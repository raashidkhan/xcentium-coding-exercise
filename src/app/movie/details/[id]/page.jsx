"use client";

import PageLayout from "@/containers/Layout";
import MovieDetail from "@/containers/MovieDetail";

const MovieDetailsPage = () => {
  return (
    <div className="wrapper">
      <PageLayout>
        <MovieDetail />
      </PageLayout>
    </div>
  );
};

export default MovieDetailsPage;
