// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { postSlice } from './slices/postSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    post: postSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
