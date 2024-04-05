import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return null;
  return (
    <div className="mr-4">
      <img className="w-48 max-w-none rounded cursor-pointer" src={IMAGE_CDN + movie.poster_path} />
    </div>
  );
};

export default MovieCard;
