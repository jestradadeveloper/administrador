import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    error: false,
    errorMessages: null,
  },
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
    addErrorMessages: (state, action) => {
      state.error = true;
      state.errorMessages = action.payload;
    },
    removeErrorMessages: (state, action) => {
      state.error = fase;
      state.errorMessages = null;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setIsLoading,
  finishLoading,
  addErrorMessages,
  removeErrorMessages,
} = uiSlice.actions;
