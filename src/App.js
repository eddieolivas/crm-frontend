import './App.css';
import { DefaultLayout } from './layouts/DefaultLayout';
// import { NewTicket } from './pages/newTicket/NewTicket';
// import { Dashboard } from './pages/dashboard/Dashboard';
import { TicketList } from './pages/ticketList/TicketList';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <NewTicket /> */}
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;
