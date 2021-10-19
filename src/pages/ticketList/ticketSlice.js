import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  replyTicketError: "",
  searchTicketList: [],
  selectedTicket: {},
  replyMessage: "",
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.searchTicketList = action.payload;
      state.tickets = action.payload;
      state.error = "";
    },
    fetchTicketFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchTickets: (state, action) => {
      state.searchTicketList = state.tickets.filter((row) => {
        if (!action.payload) return row;

        return row.subject.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
    fetchSingleTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.selectedTicket = action.payload;
      state.error = "";
    },
    fetchSingleTicketFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    replyTicketLoading: (state) => {
      state.isLoading = true;
    },
    replyTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.replyTicketError = "";
      state.replyMessage = payload;
    },
    replyTicketFailed: (state, action) => {
      state.isLoading = false;
      state.replyTicketError = action.payload;
    },
    closeTicketLoading: (state) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.replyMessage = payload;
      state.selectedTicket.status = "Closed";
    },
    closeTicketFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearReplyMessage: (state) => {
      state.isLoading = false;
      state.replyMessage = "";
      state.replyTicketError = "";
    },
  },
});

const { reducer, actions } = ticketListSlice;

export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFailed,
  searchTickets,
  fetchSingleTicketFailed,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFailed,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFailed,
  clearReplyMessage,
} = actions;

export default reducer;
