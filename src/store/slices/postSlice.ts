// src/store/slices/postSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../models/Post';

interface PostsState {
  posts: Post[] | null;
}

const initialState: PostsState = {
  posts: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;

