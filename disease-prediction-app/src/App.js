import React from 'react';
import './App.css';
import Background from './heartbeat.jpg';
import GetDisease from './GetDisease';
import FormClass from './FormClass';


function App() {
  

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        
      </header>
      <FormClass />
        {/* <GetDisease symp='cough'/> */}
    </div>
  );
}


export default App;

