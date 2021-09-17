import './App.css';
import { DefaultLayout } from './layouts/DefaultLayout';
import { NewTicket } from './pages/newTicket/NewTicket';
// import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Dashboard /> */}
        <NewTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
