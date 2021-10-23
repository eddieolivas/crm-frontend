import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registrationPending: (state) => {
      state.isLoading = true;
      state.status = "";
      state.message = "";
    },
    registrationSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    registrationFailed: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
    clearRegistrationMessage: (state) => {
      state.isLoading = false;
      state.status = "";
      state.message = "";
    },
  },
});

const { reducer, actions } = registrationSlice;

export const {
  registrationPending,
  registrationSuccess,
  registrationFailed,
  clearRegistrationMessage,
} = actions;

export default reducer;
