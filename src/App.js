import React, { Component } from 'react';
import './App.css';

import Page from "./Page"
import SettingsForm from "./SettingsForm"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pen Page</h1>
        </header>
        <SettingsForm/>
        <Page/>
      </div>
    );
  }
}

export default App;
