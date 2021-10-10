import axios from "axios";

import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFailed,
  searchTickets,
} from "./ticketSlice";

export const fetchAllTickets = () => async (dispatch) => {
  // Set ticket loading state
  dispatch(fetchTicketLoading());

  try {
    const result = await axios.get("http://localhost:3001/v1/ticket", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkZGllQGNocnlzYWxpc3dlYmRldmVsb3BtZW50LmNvbSIsImlhdCI6MTYzMzkwMTU5MiwiZXhwIjoxNjMzOTAyNDkyfQ.qVc6VqPHgMZwsSRWXr0n_F3Bx9dHaB12WjvHEF08bjc",
      },
    });

    console.log(result.data.result);
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFailed(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
