import { CommentProps } from './../../../global/types';
import {
    ImageSourcePropType,
} from 'react-native';

interface Comment {
    nickname: string;
    comment: string;
}

export interface AddCommentState {
    itemId: number,
    comment: CommentProps,
}

export interface PostState {
    id: number;
    nickname: string;
    email: string;
    imageUrl: ImageSourcePropType;
    comments?: Array<CommentProps>
}

export type PostsState = {
    posts: Array<PostState>
}