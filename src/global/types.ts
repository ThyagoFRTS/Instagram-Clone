import { UserState } from './../storage/ducks/users/types';
export type CommentProps = {
    nickname: string,
    comment: string,
}

export type RootStackParamList = {
    Login: undefined,
    Signup: undefined,
}

export type UserProps = {
    name: string,
    email: string,
}

export type ApplicationState = {
    user: UserState;
}