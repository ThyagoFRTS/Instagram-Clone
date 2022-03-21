import { UserState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const INITIAL_STATE: UserState = {
    data: {
        name: 'Thyago',
        nickname: "npx.msc",
        email: "kzkr.thyago@gmail.com",
        description: `幸せ\nprintf("君の知らない物語");\nComputer Engineer\nGithub: ThyagoFRTS`
    }
    
}
/*

const INITIAL_STATE: UserState = {
    data: null
}
*/

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
            state.data = action.payload.data
            //state.email = action.payload.email
        },
        logout: (state) => {
            //state = INITIAL_STATE;
            state.data = null
        }
    }

})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer
