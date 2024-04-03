import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const getNowPlayingMovies = useSelector(
    (state) => state.movie.nowPlayingMovies
  );
  if (!getNowPlayingMovies) {
    return null;
  }
  //Just render the 1st movie to display this
  const getFirstMovie = getNowPlayingMovies[0];

  return (
    <div>
      <VideoTitle
        title={getFirstMovie.original_title}
        overview={getFirstMovie.overview}
      />
      <VideoBackground id={getFirstMovie.id}/>
    </div>
  );
};

export default MainContainer;
