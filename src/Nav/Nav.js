import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { faHome, faSuitcase, faEnvelope} from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 
class Nav extends Component {
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
      menu = 
      <ul className="Home-nav">
        <NavLink to='/'>
          <li>
            <FontAwesomeIcon icon={faHome} className="icon"/>Home
          </li>
        </NavLink>
         <NavLink to='/portfolio' className="nav">
            <li>
              <FontAwesomeIcon icon={faSuitcase} className="icon"/>Portfolio
            </li>
         </NavLink>
          <NavLink to='/contact' className="nav">
            <li>
             <FontAwesomeIcon icon={faEnvelope} className="icon"/>
              Contact
            </li>
          </NavLink>
    </ul>
    }
    return (
      <header>
      <input type="checkbox" className="toggle" id="menu" value={this.state.checked} onClick={this.handleClick}/>
        <label htmlFor="menu">
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </label>
        {menu}
    </header>
  )
}
}

export default Nav;