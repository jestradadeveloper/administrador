import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // not-authenticated, checking, authenticated
    token: null,
    email: null,
    name: null,
    role: null,
    errorMessage: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.token = payload.token;
      state.email = payload.email;
      state.name = payload.name;
      state.role = payload.role;
    },
    logout: (state, {payload}) => {
      state.status = 'not-authenticated';
      state.token = null;
      state.email = null;
      state.name = null;
      state.role = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;