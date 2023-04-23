import authSlice from '@/features/authentication/slices/auth.slice';
import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './slices/global.slice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
