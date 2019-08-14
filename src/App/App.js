import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import resume from '../resume.pdf';
import './App.scss';
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact'

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
        <a href={resume} download>Download Resume</a>
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