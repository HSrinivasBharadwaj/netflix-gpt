import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector(state => state.gpt.gptMovies)
  if (!gpt) return null;
  return (
    <div className='p-4 m-4 bg-black text-white'>
      {gpt.map((movie) => {
        return (
          <div>
            <MovieList movies={movie.results} />
          </div>
        )
      })}
    </div>
  )
}

export default GptMovieSuggestions