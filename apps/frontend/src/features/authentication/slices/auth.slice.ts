import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoggedInUserData } from '../types/logged-in-user-data.type';

export interface AuthState {
  firstName: string;
  lastName: string;
  email: string;
  refreshTokenExpires: Date | null;
  accessTokenExpires: Date | null;
}

const initialState: AuthState = {
  firstName: '',
  lastName: '',
  email: '',
  refreshTokenExpires: null,
  accessTokenExpires: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedInUserData: (state, action: PayloadAction<LoggedInUserData>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.refreshTokenExpires = action.payload.refreshTokenExpires;
      state.accessTokenExpires = action.payload.accessTokenExpires;
    },

    clearLoggedInUserData: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.refreshTokenExpires = null;
      state.accessTokenExpires = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUserData, clearLoggedInUserData } = authSlice.actions;

export default authSlice.reducer;
