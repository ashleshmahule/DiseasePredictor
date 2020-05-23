import React from 'react';
import './App.css';
import background from './heartbeat.jpg';
import GetDisease from './GetDisease';


function App() {
  
  
  return (
    <div className="App" style = {{ backgroundImage: "url(" + background + ")"}}>
      <header className="App-header">
        <h1>Welcome</h1>
        <GetDisease symp='cough'/>
      </header>
    </div>
  );
}


export default App;

