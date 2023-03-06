import { configureStore } from "@reduxjs/toolkit";
import { authSlice, teamsSlice, usersSlice, accountsSlice, uiSlice } from "./";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    teams: teamsSlice.reducer,
    accounts: accountsSlice.reducer,
    users: usersSlice.reducer,
  },
});
