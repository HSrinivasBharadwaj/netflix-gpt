import React from 'react'
import Header from './Header'
import useFetchPopularMovies from '../hooks/useFetchPopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useFetchNowPlaying from '../hooks/useFetchNowPlaying'
import useFetchTopRatedMovies from '../hooks/useFetchTopRatedMovies'
import useFetchUpcomingMovies from '../hooks/useFetchUpcomingMovies'

const Browse = () => {
  useFetchPopularMovies();
  useFetchNowPlaying();
  useFetchTopRatedMovies();
  useFetchUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse