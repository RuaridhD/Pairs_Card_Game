import React from 'react'
import './public/NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {

  return(
    <ul className="NavBar">
      <li className="NavBar-li" >
        {<Link to="/">Home </Link>}
      </li>
      <li className="NavBar-li">
        {<Link to="/pairs"> Pairs </Link>}
      </li>
      <li className="NavBar-li">
      {<Link to="/players"> Players</Link>}
      </li>
      <li className="NavBar-li">
        {<Link to="/about"> About </Link>}
      </li>
    </ul>
  ) // end of return
} // end of NavBar

export default NavBar
