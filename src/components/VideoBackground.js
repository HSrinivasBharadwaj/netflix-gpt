import React from "react";
import { useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

const VideoBackground = ({ id }) => {
  useFetchTrailer(id);
  const trailer = useSelector((state) => state.movie?.nowPlayingTrailer);
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}/?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
