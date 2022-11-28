import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'

export const storeAPp = configureStore({
    reducer: {
        user: userReducer,
    }
});