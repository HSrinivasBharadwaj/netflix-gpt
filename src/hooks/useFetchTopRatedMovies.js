import React,{useEffect} from 'react';
import axios from 'axios';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { topRatedMovie } from '../features/movies/movieSlice';

const useFetchTopRatedMovies = () => {
    const dispatch = useDispatch();
    const fetchTopRatedMovies = async () => {
        try {
            const response = await axios.request("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
            dispatch(topRatedMovie(response.data.results))
        } catch (error) {
            console.log("error",error)
        }
    }
    useEffect(() => {
        fetchTopRatedMovies()
    },[])
  
}

export default useFetchTopRatedMovies