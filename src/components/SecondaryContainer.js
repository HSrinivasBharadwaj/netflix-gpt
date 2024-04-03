import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const popularMovies = useSelector(state => state.movie);
  return (
    <div className='p-5'>
      <MovieList title="Now Playing" movies={popularMovies.nowPlayingMovies}/>
      <MovieList title="Popular Movies" movies={popularMovies.popularMovies}/>
      <MovieList title="TopRated Movies" movies={popularMovies.topRatedMovies}/>
      <MovieList title="Upcoming Movies" movies={popularMovies.upComingMovieDetails}/>
    </div>
  )
}

export default SecondaryContainer