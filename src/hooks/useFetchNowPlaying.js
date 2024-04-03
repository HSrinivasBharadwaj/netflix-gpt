import React,{useEffect} from 'react';
import axios from 'axios';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { popularMovies } from '../features/movies/movieSlice';

const useFetchNowPlaying = () => {
    const dispatch = useDispatch();
    const fetchNowPlayingMovies = async () => {
        try {
            const response = await axios.request("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS);
            dispatch(popularMovies(response.data.results))
        } catch (error) {
            console.log("error",error)
        }
    }
    useEffect(() => {
        fetchNowPlayingMovies()
    },[])
  
}

export default useFetchNowPlaying