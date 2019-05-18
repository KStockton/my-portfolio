import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }







  render() {



    return (
      <div>
        <div className="App">
        <Header/>
      <header className="App-header">
      <Switch>
        
      </Switch>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
      </div>
    )
  }
}









export default App;
