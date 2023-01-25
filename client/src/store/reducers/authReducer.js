import { createSlice } from '@reduxjs/toolkit';
import { authAction } from '../actions/authActions';

const initialState = {
  token: localStorage.getItem('token'),
  isLoggedIn: !!localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authAction,
});

export const { logIn, logout } = authSlice.actions;

export default authSlice;
