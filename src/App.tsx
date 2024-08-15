import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Map-React-GoogleApi-test-Juan-Basti</h1>
      <nav>
        <ul>
          <li><Link to="/">Ref</Link></li>
          <li><Link to="/map">Map</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
