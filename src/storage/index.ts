import { ApplicationState } from './../global/types';
import { createStore, Store } from 'redux'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './ducks/user/userSlice';
import postsReducer from './ducks/posts/postsSlicer';


const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export default store;