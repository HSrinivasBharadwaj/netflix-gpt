import React,{useEffect} from 'react';
import axios from 'axios';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { upComingMovies } from '../features/movies/movieSlice';

const useFetchUpcomingMovies = () => {
    const dispatch = useDispatch();
    const fetchUpComingMovies = async () => {
        try {
            const response = await axios.request("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS);
            dispatch(upComingMovies(response.data.results))
        } catch (error) {
            console.log("error",error)
        }
    }
    useEffect(() => {
        fetchUpComingMovies()
    },[])
  
}

export default useFetchUpcomingMovies