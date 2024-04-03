import React,{useEffect} from 'react';
import axios from 'axios';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { playingNowTrailer } from '../features/movies/movieSlice';

const useFetchTrailer = (id) => {
    const dispatch = useDispatch();
    const fetchTrailerVideo = async () => {
        try {
          const response = await axios.request(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            API_OPTIONS
          );
          //Find the type trailer
          const filteredData = response.data.results.filter(
            (video) => video.type === "Trailer"
          );
          //What if there is no trailer
          const trailer = filteredData.length
            ? filteredData[0]
            : response.data.results[0];
          dispatch(playingNowTrailer(trailer))
        } catch (error) {
          console.log("error", error);
        }
      };
      useEffect(() => {
        fetchTrailerVideo();
      }, []);
  
}

export default useFetchTrailer