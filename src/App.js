import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { Entry } from "./pages/entry/Entry";
import { NewTicket } from "./pages/newTicket/NewTicket";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { TicketList } from "./pages/ticketList/TicketList";
import { Ticket } from "./pages/ticket/Ticket";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/new-ticket">
            <NewTicket />
          </PrivateRoute>
          <PrivateRoute exact path="/tickets">
            <TicketList />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:ticketid">
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
