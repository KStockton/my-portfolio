import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';


class App extends Component {

  render() {

    return (
      <div>
        <Nav/>
        { (this.props.history.location === '/') && <Home/>}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/contact" component={Contact}/>
          <Route path='' component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);