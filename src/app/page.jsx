"use client";

import PageLayout from "@/containers/Layout";
import MovieList from "@/containers/MovieList";

export default function Home() {
  return (
    <div className="wrapper">
      <PageLayout>
        <MovieList />
      </PageLayout>
    </div>
  );
}
