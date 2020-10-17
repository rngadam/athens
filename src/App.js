import React from 'react';
import logo from './logo.svg';
import ProposalList from './ProposalList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Proposals</h1>
      </header>
        {/* <!--<img src={logo} className="App-logo" alt="logo" />--> */}
        <ProposalList/>
    </div>
  );
}

export default App;
