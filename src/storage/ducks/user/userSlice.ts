import { UserProps } from './../../../global/types';
import { UserState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const INITIAL_STATE: UserState = {
    name: null,
    email: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        login: (state, action: PayloadAction<UserProps>) => {
            state.name = action.payload.name,
                state.email = action.payload.email
        },
        reset: (state) => {
            state = INITIAL_STATE;
        },
        logout: (state) => {
            state.email = INITIAL_STATE.email
            state.name = INITIAL_STATE.name        
        }
    }

})

export const { login, logout, reset} = userSlice.actions;
export default userSlice.reducer
