import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const App = () => {
 
  return (
    <div>
      <Nav/>
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;