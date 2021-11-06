import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
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
} = actions;

export default reducer;
