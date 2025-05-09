import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-text">
        <img src="/images/home/logo.png" width={"40px"}/>
        <div className="text">MetaTrainer</div>
      </div>
      <div className="nav-links">
      <Link to="/">Home</Link>
      </div>
    </nav>
  )
}

export default Navbar