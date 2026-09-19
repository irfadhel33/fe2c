import { useRef } from "react";
import MovieCard from "./MovieCard";
import "../styles/Home.css"

function MovieSection({ title, movies, onAdd, onDelete, onUpdate,canUpdate, isInMyList }) {
  const movieListRef = useRef(null);

  function scrollLeft() {
    movieListRef.current?.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    movieListRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  }
  return (
    <section className="movie-section">
      <h2 className="movie-section-title">{title}</h2>

      <div className="movie-container">
        <button className="arrow arrow--left" type="button" onClick={scrollLeft} aria-label={`Geser ${title} ke kiri`}>
          <span aria-hidden="true">‹</span>
        </button>

        <div className="movie-list" ref={movieListRef}>
          {movies.map((movie) => (
            <MovieCard
              key={`${title}-${movie.id}`}
              movie={movie}
              onAdd={onAdd}
              onDelete={onDelete}
              onUpdate={onUpdate}
              canUpdate={canUpdate ? canUpdate(movie) : true}
              isInMyList={isInMyList ? isInMyList(movie) : false}
            />
          ))}
        </div>

        <button className="arrow arrow--right" type="button" onClick={scrollRight} aria-label={`Geser ${title} ke kanan`}>
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  );
}

export default MovieSection;
