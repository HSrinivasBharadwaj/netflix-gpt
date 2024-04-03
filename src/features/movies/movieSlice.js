import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        nowPlayingTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        playingNowTrailer: (state,action) => { 
            state.nowPlayingTrailer = action.payload
        }
    }
})

export const {addNowPlayingMovies,playingNowTrailer} = movieSlice.actions;
export default movieSlice.reducer;