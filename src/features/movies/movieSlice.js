import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        nowPlayingTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovieDetails:null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        playingNowTrailer: (state,action) => { 
            state.nowPlayingTrailer = action.payload
        },
        popularMovies: (state,action) => { 
            state.popularMovies = action.payload
        },
        topRatedMovie: (state,action) => {
            state.topRatedMovies = action.payload
        },
        upComingMovies: (state,action) => {
            state.upComingMovieDetails = action.payload
        }

    }
})

export const {addNowPlayingMovies,playingNowTrailer,popularMovies,topRatedMovie,upComingMovies} = movieSlice.actions;
export default movieSlice.reducer;