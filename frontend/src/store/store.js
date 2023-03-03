import { configureStore } from '@reduxjs/toolkit'
import { authSlice, teamsSlice, usersSlice,accountsSlice } from './'
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    teams: teamsSlice.reducer,
    accounts: accountsSlice.reducer,
    users: usersSlice.reducer
  }
})