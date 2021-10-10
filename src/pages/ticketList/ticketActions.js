import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFailed,
  searchTickets,
} from "./ticketSlice";
import { getAllTickets } from "../../api/ticketApi";

export const fetchAllTickets = () => async (dispatch) => {
  // Set ticket loading state
  dispatch(fetchTicketLoading());

  try {
    const result = await getAllTickets();

    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFailed(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
