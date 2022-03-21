import { UserState } from '../storage/ducks/user/types';
export type CommentProps = {
    nickname: string,
    comment: string,
}

export type RootBottomParamList = {
    Feed: undefined,
    AddPhoto: undefined,
    Profile: undefined,
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