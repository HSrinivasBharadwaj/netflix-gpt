import React,{useEffect} from 'react';
import axios from 'axios';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../features/movies/movieSlice';

const useFetchPopularMovies = () => {
    const dispatch = useDispatch();
    const fetchPopularMovies = async () => {
        try {
            const response = await axios.request("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
            dispatch(addNowPlayingMovies(response.data.results))
        } catch (error) {
            console.log("error",error)
        }
    }
    useEffect(() => {
        fetchPopularMovies()
    },[])
  
}

export default useFetchPopularMovies