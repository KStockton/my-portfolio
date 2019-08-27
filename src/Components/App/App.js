import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';

const App = () => {
 
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
};

export default App;