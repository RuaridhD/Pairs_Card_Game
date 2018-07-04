import React from 'react'
import './public/Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div id="rules-div">
        <h1>Welcome to CARDBRO Gaming</h1>
        <h2>Pairs</h2>
        <h3>How To Play</h3>
      <p id="rules">
      In turn, each player chooses two cards and turns them face up. If they are of the same rank and color (e.g. six of hearts and six of diamonds, queen of clubs and queen of spades, or both jokers, if used) then that player wins the pair and plays again. If they are not of the same rank and color, they are turned face down again and play passes to the player on the left. Rules can be changed here too: it can be agreed before the game starts that matching pairs be any two cards of the same rank, a color-match being unnecessary, or that the match must be both rank and card suit.
      The game ends when the last pair has been picked up. The winner is the person with the most pairs. There may be a tie for first place.
    </p>
  </div>
  <div id="play-now-div">
  <Link id="play-now" to="/pairs"> Play Now </Link>
    </div>
    </div>

  ) // end of return
} // end of Home

export default Home;
