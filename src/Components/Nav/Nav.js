import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false
    };
  }

  handleChange = (event) => {
    const { checked } = event.target;

    this.setState({isChecked: checked });
  }
  
  render() {
    const { isChecked } = this.state;

    return (
      <header>
        <input 
          type="checkbox"
          id="menu" 
          checked={this.state.isChecked}
          value={this.state.isChecked} 
          onChange={this.handleChange}/>
        <label htmlFor="menu">
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </label>
        { (isChecked) ? 
          <ul className="Home-nav">
            <NavLink to='/' id='home'>
              <li>
                <i className="fas fa-home"></i>
                Home
              </li>
            </NavLink>
            <NavLink to='/contact' className="nav">
              <li>
                <i className="fas fa-envelope"></i>
                Contact
              </li>
            </NavLink>
          </ul> : null }
      </header>
    );
  }
}

export default Nav;