import { savePostOnDatabase, uploadImage } from './../../../services/firebase/index';
import { AppThunk, AppDispatch } from './../../index';
import { PostsState, PostState, AddCommentState } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../../services/api';


const INITIAL_STATE: PostsState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'npx.msc',
            email: 'kzkr.thyago@gmail.com',
            imageUrl: 'https://i.pinimg.com/564x/b8/4a/7f/b84a7f3192a819331c3d93f8133385b1.jpg',
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
            email: 'kzkr.thyago@gmail.com',
            imageUrl: 'https://i.pinimg.com/736x/21/9c/81/219c81e4370a2e6128d7d73bc45cd1b3.jpg',
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



//const savePost = createAsyncThunk('posts/save',)
export const savePost = createAsyncThunk(
    'posts/create',
    // Declare the type your function argument here:
    async (post: PostState) => {
        let response = await savePostOnDatabase(post)
        //console.log(image_uri)
        return response
    }
)


const postsSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        addPost: (state, action: PayloadAction<PostState>) => {
            state.posts = state.posts.concat({ ...action.payload })
        },
        addComment: (state, action: PayloadAction<AddCommentState>) => {
            state.posts = state.posts.map(post => {
                if (post.id === action.payload.itemId) {
                    if (post.comments) {
                        post.comments.push(action.payload.comment)
                    } else {
                        post.comments = [action.payload.comment]
                    }
                }
                return post
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(savePost.fulfilled, (state, { payload }) => {
            if (payload){
                state.posts = state.posts.concat(payload)
            }
        })     
      },
})

export const { addPost, addComment } = postsSlice.actions;
export default postsSlice.reducer
