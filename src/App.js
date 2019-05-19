import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact'

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
        <Nav/>
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact}/>
      </Switch>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
      </div>
    )
  }
}