import React,{useRef} from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResult} from '../features/gpt/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();  
  const searchText = useRef(null);
  const getLanguage = useSelector(state => state.config.lang)
  //search movie in tmdb
  const searchMovieTmdb = async(movieName) => {
    try {
        const response = await axios.request(`https://api.themoviedb.org/3/search/movie?query=${movieName}&language=en-US&page=1`,API_OPTIONS);
        return response.data
    } catch (error) {
        console.log(error)
    }
  }
  const handleGptSearchClick = async () => {
    //Make an api call to open ai call to get the movie results
    //To get the exact results
    //search the gpt results in the tmdb api
    const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query :"+ searchText.current.value + ". only give me names of five movies, comma separated like the example result given ahead. Example Result: Fear Street, Batman, Ironman, RRR, Eega"
    const getGptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      //Fear street, Gone Girl, Seven, Shutter island, 
      //Seperate each movie and store in the array
      const gptMovies = getGptResults.choices?.[0]?.message.content.split(",")
      //For each movie i will search for the tmdb api
      const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie));
      //Returns the result of five promises (for each movie -> each promise);
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResult(tmdbResults))
  }
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[getLanguage].gptSearchPlaceHolder}
        />
        <button onClick={handleGptSearchClick} className="col-span-3 m-4 py-2 px-4 bg-purple-500 text-white rounded">
          {lang[getLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
