import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
// import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const App = () => {
 
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' render={() =>  <Redirect to="/home"/>}/>
        <Route  exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
};

export default App;