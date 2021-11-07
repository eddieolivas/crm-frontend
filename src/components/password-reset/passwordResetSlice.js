import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  showUpdatePasswordForm: false,
  email: "",
};

const passwordResetSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {
    passwordResetPending: (state) => {
      state.isLoading = true;
      state.status = "";
      state.message = "";
    },
    passwordResetSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload.message;
      state.showUpdatePasswordForm = true;
      state.email = payload.email;
    },
    updatePasswordSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    passwordResetFailed: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
    clearPasswordResetMessage: (state) => {
      state.isLoading = false;
      state.status = "";
      state.message = "";
    },
  },
});

const { reducer, actions } = passwordResetSlice;

export const {
  passwordResetPending,
  passwordResetSuccess,
  passwordResetFailed,
  clearPasswordResetMessage,
  updatePasswordSuccess,
} = actions;

export default reducer;
