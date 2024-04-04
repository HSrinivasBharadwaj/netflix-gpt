import React from "react";
import Header from "./Header";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchNowPlaying from "../hooks/useFetchNowPlaying";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../hooks/useFetchUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const toggleGptPage = useSelector((state) => state.gpt.showGptPage);
  useFetchPopularMovies();
  useFetchNowPlaying();
  useFetchTopRatedMovies();
  useFetchUpcomingMovies();
  return (
    <div>
      <Header />
      {toggleGptPage ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
