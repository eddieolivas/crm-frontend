import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticketList/ticketSlice";
import loginReducer from "./components/Login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;
