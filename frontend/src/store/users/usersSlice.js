import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false
  },
  reducers: {
    refreshUsers: (state, action ) => {
      state.teams = action.payload.users;
    },
    addUser: (state, action) => {
      state.users.unshift(action.payload.user)
    },
    setUsers: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.users;
    },
    destroyUser: (state, payload) => {
    },
    startLoadingUsers: (state) => {
      state.isLoading = true;
    }
  }
});
// Action creators are generated for each case reducer function
export const { addUser,refreshUsers, setUsers, destroyUser, startLoadingUsers } = usersSlice.actions;