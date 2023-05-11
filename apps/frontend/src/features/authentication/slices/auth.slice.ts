import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthData } from '../types/auth.type';

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
    setAuthData: (state, action: PayloadAction<AuthData>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.refreshTokenExpires = new Date(action.payload.refreshTokenExpires);
      state.accessTokenExpires = new Date(action.payload.accessTokenExpires);
    },

    clearAuthData: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.refreshTokenExpires = null;
      state.accessTokenExpires = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthData, clearAuthData } = authSlice.actions;

export default authSlice.reducer;
