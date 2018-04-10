import React, { Component } from "react";
import "./App.css";

import PracticePage from "./PracticePage";
import SettingsForm from "./SettingsForm";

import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pen Page</h1>
        </header>
        <div className="Body-wrapper">
          <SettingsForm store={store} />
          <div className="Body-paper">
            <PracticePage store={store} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
