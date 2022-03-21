import {
    ImageSourcePropType,
} from 'react-native';

interface Comment {
    nickname: string;
    comment: string;
}

export interface PostState {
    id: number;
    nickname: string;
    email: string;
    imageUrl: ImageSourcePropType;
    comments: Array<Comment>
}

export type PostsState = {
    posts: Array<PostState>
}