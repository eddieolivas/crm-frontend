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
  },
});

const { reducer, actions } = newTicketSlice;

export const { newTicketFailed, newTicketLoading, newTicketSuccess } = actions;

export default reducer;
