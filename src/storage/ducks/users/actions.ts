import { UserActionTypes } from './types';
import { action } from 'typesafe-actions';
import { UserProps } from '../../../global/types';

export const login = (user: UserProps) => action(UserActionTypes.USER_LOGGED_IN, user)

export const logout = () => action(UserActionTypes.USER_LOGGED_OUT)

//export type UserActions = 