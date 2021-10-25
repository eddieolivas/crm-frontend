import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import { Entry } from "./pages/entry/Entry";
import { Registration } from "./pages/registration/Registration";
import { NewTicket } from "./pages/newTicket/NewTicket";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { TicketList } from "./pages/ticketList/TicketList";
import { Ticket } from "./pages/ticket/Ticket";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { NotFound } from "./pages/notFound/NotFound";
import { Verification } from "./pages/verification/Verification";
import { ResetPassword } from "./pages/reset-password/ResetPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/verification/:_id/:email">
            <Verification />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
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
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
