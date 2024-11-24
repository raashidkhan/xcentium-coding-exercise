"use client";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import MovieList from "@/containers/MovieList";
import useIsMobile from "@/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="wrapper">
      <Header isMobile={isMobile} />
      <main>
        <MovieList />
      </main>
      <Footer />
    </div>
  );
}
