import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticketList/ticketSlice";
import loginReducer from "./components/Login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import newTicketReducer from "./pages/newTicket/addTicketSlice";
import registrationReducer from "./components/registration-form/registrationSlice";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
    newTicket: newTicketReducer,
    registration: registrationReducer,
  },
});

export default store;
