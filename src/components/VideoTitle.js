import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 w-36 rounded text-lg mr-4">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 w-36 rounded text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
