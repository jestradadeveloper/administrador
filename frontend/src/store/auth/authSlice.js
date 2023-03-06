import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loading: false,
  userInfo: null, // for user object
  userToken: null, // for storing the JWT
  error: false,
  success: false, // for monitoring the registration process.
  errorMessages: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.userInfo = payload.user;
      state.userToken = payload.token;
      state.error = false;
      state.errorMessage = [];
    },
    validateAuth: (state, action) => {
      state.isLoggedIn = true;
      state.userToken = action.payload.token;
      state.userInfo = action.payload.user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
      state.userToken = null;
      state.errorMessage = null;
    },
    checkingCredentials: (state, action) => {
      state.isLoggedIn = true;
    },
    saveLoggedUser: (state, action) => {
      const { token, user } = action.payload;
      state.isLogged = true;
      state.status = "authenticated";
      state.userId = user.userId;
      state.token = token;
      state.role = user.role;
      state.email = user.email;
    },
    updateErrorState: (state, action) => {
      state.error = action.payload.error;
      state.errorMessages = action.payload.message;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  saveLoggedUser,
  login,
  logout,
  checkingCredentials,
  validateAuth,
  updateErrorState,
} = authSlice.actions;
