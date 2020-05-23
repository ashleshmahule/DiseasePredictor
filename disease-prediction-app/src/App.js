import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome
        </a>
      </header>
    </div>
  );
}

function getDisease(symptoms) {
  fetch('https://diseasepredtictor.herokuapp.com/getDisease?query=' + symptoms)
    .then(async response => {
      const data = await response.json();

      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      
    })
    .catch(error => {
      this.setState({ errorMessage: error.toString() });
      console.error('There was an error!', error);
    })
}

export default App;
