import { UserProps } from '../../../global/types';
export enum UserActionTypes {
    USER_LOGGED_IN = 'USER_LOGGED_IN',
    USER_LOGGED_OUT = 'USER_LOGGED_OUT'
}

// TODO: verify how to add read only props
export type UserState = {
    readonly name?: string,
    readonly email?: string,
};