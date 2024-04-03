import React from 'react'
import Header from './Header'
import useFetchPopularMovies from '../hooks/useFetchPopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useFetchPopularMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse