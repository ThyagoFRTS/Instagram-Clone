import { AppThunk, AppDispatch } from './../../index';
import { PostsState, PostState, AddCommentState } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../services/api';

const INITIAL_STATE: PostsState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'npx.msc',
            email: 'miawu@gmail.com',
            imageUrl: require('../../../../assets/imgs/idk.jpg'),
            comments: [
                {
                    nickname: 'mas é claro',
                    comment: "que o sol"
                }, {
                    nickname: 'vai voltar amanha',
                    comment: 'mais uma vez, eu sei'
                }]
        }, {
            id: Math.random(),
            nickname: 'knsm',
            email: 'sss@gmail.com',
            imageUrl: require('../../../../assets/imgs/ed1.jpg'),
            comments: [
                {
                    nickname: 'tem gente que',
                    comment: "está do mesmo lado que vc"
                }, {
                    nickname: 'mas deveria estar do lado',
                    comment: 'de la, tem gente que machuca os outros'
                }]
        }
    ] 
}

export const savePostOnDatabase = (post: PostState) => async (dispatch: AppDispatch) => {
    const headers = { 'Content-type': 'application/json; charset=UTF-8' };
    
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        addPost: (state, action: PayloadAction<PostState>) => {
            state.posts = state.posts.concat({...action.payload})    
        },
        addComment: (state, action: PayloadAction<AddCommentState>) => {
            state.posts = state.posts.map(post => {
                if (post.id === action.payload.itemId){
                    if (post.comments){
                        post.comments.push(action.payload.comment)
                    } else {
                        post.comments = [action.payload.comment]
                    }
                }
                return post
            })
        }
    },

})

export const { addPost, addComment } = postsSlice.actions;
export default postsSlice.reducer
