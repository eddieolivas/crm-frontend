import './App.css';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
