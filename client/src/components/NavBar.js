import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return(
    <ul>
      <li>
        {<Link to="/">Home </Link>}
      </li>
      <li>
        Pairs
      </li>
      <li>
        About
      </li>
    </ul>
  ) // end of return
} // end of NavBar


// {/* <Link to="/pairs">Pairs </Link> */}
//
// {/* <Link to="/">Home </Link> */}
// {/* <Link to="/about">About </Link> */}
export default NavBar
