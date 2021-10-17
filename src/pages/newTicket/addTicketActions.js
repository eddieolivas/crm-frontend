import {
  newTicketFailed,
  newTicketLoading,
  newTicketSuccess,
} from "./addTicketSlice";

import { createNewTicket } from "../../api/ticketApi";

export const addNewTicket = (formData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(newTicketLoading());

      // Call API
      const result = await createNewTicket(formData);

      if (result.status === "error") {
        return dispatch(newTicketFailed(result.message));
      }

      dispatch(newTicketSuccess(result.message));
    } catch (error) {
      console.log(error);
      dispatch(newTicketFailed(error.message));
    }
  });
};
