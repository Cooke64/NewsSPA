import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'

export default const store = configureStore({
    reducer: {
        user: userReducer,
    }
});