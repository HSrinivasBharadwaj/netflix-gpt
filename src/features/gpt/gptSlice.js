import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptPage: false
    },
    reducers: {
        toggleShowGtpPage: (state,action) => {
            state.showGptPage = !state.showGptPage;
        },
    }
})

export const {toggleShowGtpPage} = gptSlice.actions;
export default gptSlice.reducer;