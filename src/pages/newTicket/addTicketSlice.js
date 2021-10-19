import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  successMessage: "",
};

const newTicketSlice = createSlice({
  name: "newTicket",
  initialState,
  reducers: {
    newTicketLoading: (state) => {
      state.isLoading = true;
    },
    newTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.successMessage = payload;
      state.error = "";
    },
    newTicketFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    clearSuccessMessage: (state) => {
      state.isLoading = false;
      state.successMessage = "";
    },
  },
});

const { reducer, actions } = newTicketSlice;

export const {
  newTicketFailed,
  newTicketLoading,
  newTicketSuccess,
  clearSuccessMessage,
} = actions;

export default reducer;
