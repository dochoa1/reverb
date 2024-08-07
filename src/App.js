import React, { Component } from 'react';
import Socials from './components/socials/socials'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <main>
          <div className="App-header">
            Welcome.
          </div>
          <Socials/>
        </main>
      </div>
    );
  }
}

export default App;
