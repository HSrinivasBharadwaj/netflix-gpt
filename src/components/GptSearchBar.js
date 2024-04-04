import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const getLanguage = useSelector(state => state.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[getLanguage].gptSearchPlaceHolder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-purple-500 text-white rounded">
          {lang[getLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
