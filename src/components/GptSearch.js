import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMAGE_URI } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BACKGROUND_IMAGE_URI} alt="Netflix Background Image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
