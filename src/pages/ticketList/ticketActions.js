import {
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
} from "./ticketSlice";
import {
  getAllTickets,
  getTicketById,
  updateReplyTicket,
  updateCloseTicket,
} from "../../api/ticketApi";

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

export const getSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());

  try {
    const result = await getTicketById(_id);

    dispatch(fetchSingleTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchSingleTicketFailed(error.message));
  }
};

export const replyTicket = (_id, messageObject) => async (dispatch) => {
  dispatch(replyTicketLoading());

  try {
    const result = await updateReplyTicket(_id, messageObject);

    if (result.status === "error") {
      return dispatch(replyTicketFailed(result.message));
    }
    dispatch(getSingleTicket(_id));

    dispatch(replyTicketSuccess(result.message));
  } catch (error) {
    dispatch(replyTicketFailed(error.message));
  }
};

export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());

  try {
    const result = await updateCloseTicket(_id);

    if (result.status === "error") {
      return dispatch(closeTicketFailed(result.message));
    }
    dispatch(getSingleTicket(_id));

    dispatch(closeTicketSuccess(result.message));
  } catch (error) {
    dispatch(replyTicketFailed(error.message));
  }
};
