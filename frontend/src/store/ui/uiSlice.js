import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: false,
    notificationMessage: "",
    notificationType: "info",
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
    setNotificationMessage: (state, action) => {
      state.notification = true;
      state.notificationMessage = action.payload;
    },
    removeNotification: (state) => {
      state.notification = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setIsLoading,
  finishLoading,
  addErrorMessages,
  removeErrorMessages,
  setNotificationMessage,
  removeNotification,
} = uiSlice.actions;
