import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { NewTicket } from "./pages/newTicket/NewTicket";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { TicketList } from "./pages/ticketList/TicketList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DefaultLayout>
            <Dashboard />
            <NewTicket />
            <TicketList />
          </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
