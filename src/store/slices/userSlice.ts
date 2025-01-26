import { createSlice } from '@reduxjs/toolkit';
import { Credentials } from '../../models/Auth';
import { storageServcie } from '../../services/storageService';


export interface User {
  user: Credentials | null
}


const initialState: User = {
  user: storageServcie.getLoggedinUser() || null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      storageServcie.saveToStorage(action.payload);
    },
    logoutUser: (state, action) => {
      state.user = action.payload;
      storageServcie.saveToStorage(action.payload);
    }
  },
});

export const { setUser, logoutUser } = userSlice.actions;
