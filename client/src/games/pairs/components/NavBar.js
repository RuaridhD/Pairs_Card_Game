import React from 'react'
import './public/NavBar.css'
import {Link} from 'react-router-dom'
import PairContainer from "../containers/PairContainer";
import PlayerContainer from "../containers/PlayerContainer";

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
        {<Link to="/about"> About </Link>}
      </li>
      <li className="NavBar-li"></li>
      {<Link to="/players"> Players</Link>}
    </ul>
  ) // end of return
} // end of NavBar


// {/* <Link to="/pairs">Pairs </Link> */}
//
// {/* <Link to="/">Home </Link> */}
// {/* <Link to="/about">About </Link> */}
export default NavBar
