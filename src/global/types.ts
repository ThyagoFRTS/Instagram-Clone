import { UserState } from '../storage/ducks/user/types';
import {
    ImageSourcePropType,
} from 'react-native'

export type CommentProps = {
    nickname: string,
    comment: string,
}

export type PostProps = {
    id: number;
    nickname: string;
    email: string;
    imageUrl: string;
    comments?: Array<CommentProps>
}

export type PostsProps = {
    posts: Array<PostProps>
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