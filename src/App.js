import './App.css'; // TODO: Replace with styled-component <GlobalStyles />
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import CreateAccount from './components/CreateAccount';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<CreateAccount />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;