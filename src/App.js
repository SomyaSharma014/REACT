import React from 'react';
import './App.css';
import Form from './components/Form'; 
import Services from './components/Services'; 

function App() {
  return (
    <div className="App">      <header className="App-header">
        <h1>EZ Works</h1>
        <h2>Suite Of Business Support Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
        <Form />
      </header>
      <Services />
    </div>
  );
}

export default App;