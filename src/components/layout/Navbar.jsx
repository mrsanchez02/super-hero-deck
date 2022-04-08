import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link className="navbar-brand" to={"/"}>Super Hero Deck</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link" to={'login'}>Login</Link>
                <Link className="nav-link" to={'/'}>Home</Link>
                <Link className="nav-link" to={'/profile'}>Profile</Link>
            </div>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar