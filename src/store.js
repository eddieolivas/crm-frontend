import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticketList/ticketSlice";

const store = configureStore({
  reducer: { tickets: ticketsReducer },
});

export default store;
