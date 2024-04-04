import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import movieReducer from '../features/movies/movieSlice';
import gptReducer from '../features/gpt/gptSlice';
import configReducer from '../features/config/configSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        config: configReducer
    }
})

export default store;