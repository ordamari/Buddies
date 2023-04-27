import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user.type';
import { Post } from '@/features/post/types/post.type';

export interface LoggedInUserState {
  firstName: string;
  lastName: string;
  email: string;
  profileImageUrl: string | null;
  coverImageUrl: string | null;
  posts: Post[];
}

const initialState: LoggedInUserState = {
  firstName: '',
  lastName: '',
  email: '',
  profileImageUrl: null,
  coverImageUrl: null,
  posts: [],
};

export const loggedInUserSlice = createSlice({
  name: 'loggedInUser',
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<User>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.profileImageUrl = action.payload.profileImageUrl;
      state.coverImageUrl = action.payload.coverImageUrl;
      state.posts = action.payload.posts;
    },

    clearLoggedInUser: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.profileImageUrl = null;
      state.coverImageUrl = null;
      state.posts = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUser, clearLoggedInUser } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;
