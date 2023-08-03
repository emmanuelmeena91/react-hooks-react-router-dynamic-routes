import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movie_id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(movie_id));

  return (
    <div>
      <h2>{movie.title}</h2>
      {/* Additional movie details */}
    </div>
  );
}

export default MovieShow;