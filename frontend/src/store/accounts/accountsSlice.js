import { createSlice } from '@reduxjs/toolkit';

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: [],
    isLoading: false
  },
  reducers: {
    refreshAccounts: (state, action ) => {
      state.accounts = action.payload.accounts;
    },
    addAccount: (state, action) => {
      state.accounts.unshift(action.payload.account)
    },
    setAccounts: (state, action) => {
      state.isLoading = false;
      state.accounts = action.payload.accounts;
    },
    destroyAccount: (state, payload) => {
    },
    startLoadingAccounts: (state) => {
      state.isLoading = true;
    }
  }
});
// Action creators are generated for each case reducer function
export const {  refreshAccounts, addAccount, setAccounts, destroyAccount, startLoadingAccounts } = accountsSlice.actions;