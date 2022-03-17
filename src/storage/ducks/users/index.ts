import {  login } from './actions';
import { UserState, UserActionTypes } from './types';
import { Reducer } from 'redux';
//import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/actionTypes";

const initialState: UserState = {
    name: undefined,
    email: undefined,
}
/*
const reducer = (state = initialState, action) =>{
    switch(action.type){

    }
}
*/
const userReducer: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.USER_LOGGED_IN:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email

            }
        case UserActionTypes.USER_LOGGED_OUT:
            return{
                ...state,
                name: undefined,
                email: undefined
            }
        default:
            return {
                ...state
            }
    }
}

export default userReducer;