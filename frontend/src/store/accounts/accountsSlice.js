import { createSlice } from "@reduxjs/toolkit";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    isSaving: false,
    accounts: [],
    isLoading: false,
    active: null,
    error: false,
    editMode: false,
    errorMessages: null,
  },
  reducers: {
    refreshAccounts: (state, action) => {
      state.accounts = action.payload.accounts;
    },
    addAccount: (state, action) => {
      state.accounts.unshift(action.payload.account);
    },
    setAccounts: (state, action) => {
      state.isLoading = false;
      state.accounts = action.payload.accounts;
    },
    destroyAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (obj) => obj.id !== action.payload.id
      );
    },
    setActiveAccount: (state, action) => {
      state.editMode = action.payload.editMode;
      state.active = action.payload.account;
    },
    setFormMode: (state) => {
      state.editMode = !state.editMode;
    },
    savingNewAccount: (state) => {
      state.isSaving = true;
    },
    startLoadingAccounts: (state) => {
      state.isLoading = true;
    },
    updateErrorAccountState: (state, action) => {
      state.error = action.payload.error;
      state.errorMessages = action.payload.message;
    },
    destroyAccountsData: (state, action) => {
      state.accounts = [];
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  refreshAccounts,
  addAccount,
  setAccounts,
  setActiveAccount,
  destroyAccount,
  startLoadingAccounts,
  accountRefresh,
  updateErrorAccountState,
  destroyAccountsData,
  setFormMode,
} = accountsSlice.actions;
