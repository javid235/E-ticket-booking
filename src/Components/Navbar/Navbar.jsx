import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className='nav-bar'>
        <h1 className='logo'>BookIt</h1>
        <div className='nav-link-cont'>
          <Link to='/'>
            <p className='nav-link'>Home</p>
          </Link>
          <Link to='/events'>
            <p className='nav-link'>Events</p>
          </Link>
          <Link to='/contact'>
            <p className='nav-link'>Contact</p>
          </Link>

          <button className='nav-login'>Login</button>
          <button className='nav-signup'>Sign up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar