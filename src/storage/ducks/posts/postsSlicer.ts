import { AppThunk, AppDispatch } from './../../index';
import { PostsState, PostState } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

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
/*

const INITIAL_STATE: UserState = {
    data: null
}
*/

const postsSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        addPost: (state, action: PayloadAction<PostState>) => {
            state.posts = state.posts.concat({...action.payload})    
        }
    },

})

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer
