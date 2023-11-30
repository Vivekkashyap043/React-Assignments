import React from 'react'
import logo from '../../../images/logo.png';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
    <a className="navbar-brand" href="#">
      <img className='logo' src={logo} alt="Logo"/></a>
    <ul className="navbar-nav justify-content-end">
    <li className="nav-item">
        <a className="nav-link text-white" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Signup</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Login</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
