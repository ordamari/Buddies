import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user.type';

const initialState: User = {
  firstName: '',
  lastName: '',
  email: '',
  profileImageUrl: '',
  coverImageUrl: '',
  posts: [],
  friends: [],
  id: 0,
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
      state.friends = action.payload.friends;
      state.id = action.payload.id;
    },

    clearLoggedInUser: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.profileImageUrl = '';
      state.coverImageUrl = '';
      state.posts = [];
    },
  },
});

export const { setLoggedInUser, clearLoggedInUser } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;
