import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <Router>
      <div>
      <Nav />
        <center>     
       {routes}
       </center>
      </div>
    </Router>
  );
}

export default App;
