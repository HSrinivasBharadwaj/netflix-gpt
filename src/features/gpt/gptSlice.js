import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptPage: false,
        gptMovies: null
    },
    reducers: {
        toggleShowGtpPage: (state,action) => {
            state.showGptPage = !state.showGptPage;
        },
        addGptMovieResult: (state,action) => {
            state.gptMovies = action.payload;
        }
    }
})

export const {toggleShowGtpPage,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;