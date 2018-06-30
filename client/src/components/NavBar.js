import React from 'react'
import {Link} from 'react-router-dom'
import PairContainer from "../containers/PairContainer";

const NavBar = () => {
  return(
    <ul>
      <li>
        {<Link to="/">Home </Link>}
      </li>
      <li>
        {<Link to="/pairs"> Pairs {PairContainer} </Link>}
      </li>
      <li>
        {<Link to="/about"> About </Link>}
      </li>
    </ul>
  ) // end of return
} // end of NavBar


// {/* <Link to="/pairs">Pairs </Link> */}
//
// {/* <Link to="/">Home </Link> */}
// {/* <Link to="/about">About </Link> */}
export default NavBar
