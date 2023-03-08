import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    isSaving: false,
    users: [],
    isLoading: false,
    active: null,
    error: false,
    errorMessages: null,
    editMode: false,
  },
  reducers: {
    refreshUsers: (state, action) => {
      state.teams = action.payload.users;
    },
    addUser: (state, action) => {
      state.users.unshift(action.payload.user);
    },
    setUsers: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.users;
    },
    destroyUser: (state, action) => {
      state.users = state.users.filter((obj) => obj.id !== action.payload.id);
    },
    setActiveUser: (state, action) => {
      state.active = action.payload;
    },
    savingNewUser: (state) => {
      state.isSaving = true;
    },
    startLoadingUsers: (state) => {
      state.isLoading = true;
    },
    setUserFormMode: (state) => {
      state.editMode = !state.editMode;
    },
    destroyUsersData: (state, action) => {
      state.users = [];
    },
    updateErrorUserState: (state, action) => {
      state.error = action.payload.error;
      state.errorMessages = action.payload.message;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  addUser,
  setActiveUser,
  savingNewUser,
  refreshUsers,
  setUsers,
  destroyUser,
  setUserFormMode,
  startLoadingUsers,
  destroyUsersData,
  updateErrorUserState,
} = usersSlice.actions;
