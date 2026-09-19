import { useState } from "react";

function MovieCard({ 
  movie, 
  onAdd, 
  onDelete, 
  onUpdate, 
  canUpdate,
  isInMyList }) {
  function handleUpdate() {
    const newRating = prompt("Masukkan rating baru:");

    if (!newRating) {
      return;
    }

    onUpdate(movie.id, newRating);
  };

  return (
    <article className={`movie-card movie-card--${movie.variant}`}>
      <img src={movie.image} alt={movie.title} />

      {movie.badge && (
        <span className={`movie-badge movie-badge--${movie.badge.type}`}>
          {movie.badge.text}
        </span>
      )}

      {movie.variant === "landscape" ? (
        <div className="movie-card-info">
          <p>{movie.title}</p>
          <span>★ {movie.rating}/5</span>
        </div>
      ) : null}
      {onAdd && (
      <button 
        className="movie-card-add"
        onClick={() => onAdd(movie)}
        disabled={isInMyList}
      >
        {isInMyList ? "✓" : "+"}
      </button>
      )}

      {onDelete && (
      <button 
        className="movie-card-add movie-card-delete"
        onClick={() => onDelete(movie.id)}
      >
        -
      </button>
      )}

      {onUpdate && canUpdate &&(
        <button
          className="movie-card-edit"
          onClick={handleUpdate}
        >
          Update Rating
        </button>
      )}
    </article>
  );
}

export default MovieCard;
