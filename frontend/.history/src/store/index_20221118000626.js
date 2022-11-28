import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'

export const storeA = configureStore({
    reducer: {
        user: userReducer,
    }
});