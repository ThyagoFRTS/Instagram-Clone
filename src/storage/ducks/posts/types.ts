import { CommentProps, PostProps, PostsProps } from './../../../global/types';

export interface AddCommentState {
    itemId: number,
    comment: CommentProps,
}

export type PostState = PostProps

export type PostsState = PostsProps