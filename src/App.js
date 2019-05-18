import React from 'react';
import routes from './routes'
import Nav from './Components/Nav/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
       <h2><center><Nav />{routes}</center></h2>
    </div>
  );
}

export default App;
