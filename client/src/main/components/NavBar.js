import React from 'react'
import './public/NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {

  return(
    <div id="navbar-div">
      <ul className="navbar-list">
        <li>{<Link to="/">Home </Link>}</li>
        <li>{<Link to="/pairs"> Pairs </Link>}</li>
        <li>{<Link to="/players"> Players</Link>}</li>
        <li>{<Link to="/about"> About </Link>}</li>
      </ul>
    </div>

  ) // end of return
} // end of NavBar

export default NavBar
