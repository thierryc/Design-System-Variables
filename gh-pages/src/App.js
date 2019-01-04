import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import * as DSV from './dsv';

class App extends Component {
  render() {
    return (
      <Fragment>
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
              Learn React
            </a>
          </header>
          
        </div>
        <code><pre>
        { JSON.stringify(DSV, null, 4) }
        </pre></code>
      </Fragment>
    );
  }
}

export default App;
