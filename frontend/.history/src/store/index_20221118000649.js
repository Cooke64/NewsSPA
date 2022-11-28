import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'

 const storeApp = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default storeApp