import React from "react";
import MoviesListItem from "../MovieListItem/MovieListItem";

const MoviesList = ({ movies }) => {
  return (
    <div>
      MoviesList
      {movies.map((movie) => {
        return <MoviesListItem key={movie.imdbId} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList;