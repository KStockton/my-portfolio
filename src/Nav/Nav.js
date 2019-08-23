import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
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
    const { checked } = this.state

    return (
      <header>
      <input type="checkbox" className="toggle" id="menu" value={this.state.checked} onClick={this.handleClick}/>
        <label htmlFor="menu">
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </label>
        { checked ? <ul className="Home-nav">
        <NavLink to='/'>
          <li>
          <i class="fas fa-home"></i>
            Home
          </li>
        </NavLink>
         <NavLink to='/portfolio' className="nav">
            <li>
            <i class="fas fa-briefcase"></i>
              Portfolio
            </li>
         </NavLink>
          <NavLink to='/contact' className="nav">
            <li>
            <i class="fas fa-envelope"></i>
              Contact
            </li>
          </NavLink>
    </ul> : null }
    </header>
  )
}
}

export default Nav;