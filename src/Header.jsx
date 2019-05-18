import React from 'react';
import { Navlink } from 'react-router-dom'


const Header = () => {

  return (
    <header>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/portfolio' className="nav">Portfolio</NavLink>
      <NavLink to='/contact' className="nav">Contact</NavLink>
      <h2>Home</h2>
      <h3></h3>
    </header>
  )
}