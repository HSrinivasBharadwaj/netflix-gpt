import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="mt-3">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="flex overflow-x-scroll mt-3">
          {movies &&
            movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />  
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
