import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { faHome, faSuitcase, faEnvelope} from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.scss'

 
export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      checked: false
    }
  }

  handleClick = (event) => {
    this.setState({checked: !this.state.checked})
  }
  
  render() {
    let menu
    if(this.state.checked){
      menu = <nav className="Home-nav">
      <NavLink to='/'>
      <FontAwesomeIcon icon={faHome} className="icon"/>
      Home</NavLink>
      <NavLink to='/portfolio' className="nav"> 
      <FontAwesomeIcon icon={faSuitcase} className="icon"/>
      Portfolio</NavLink>
      <NavLink to='/contact' className="nav">
      <FontAwesomeIcon icon={faEnvelope} className="icon"/>
    Contact</NavLink>
    </nav>
    }
    return (
      <header>
      {menu}
      <input type="checkbox" className="toggle" id="menu" value={this.state.checked} onClick={this.handleClick}/>
        <label for="menu">
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </label>
    </header>
  )
}
}

// export default Header