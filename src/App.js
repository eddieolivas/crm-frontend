import './App.css';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';

import { Entry } from './pages/entry/Entry';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Entry /> */}
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
