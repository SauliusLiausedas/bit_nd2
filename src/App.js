import React, { Component } from 'react';
import logo from './logo.svg';
import Body from './body.js'
import Forms from './body/forms.js'
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Forms />
        <Body />
        <Body />
      </div>
    );
  }
}

export default App;
