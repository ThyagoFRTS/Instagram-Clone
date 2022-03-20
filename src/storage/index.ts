import { ApplicationState } from './../global/types';
import { createStore, Store } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './ducks/user/userSlice';


const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;