import React from 'react'
import './About.css'

const About = () => {
  return (
  <div className="body">
    <h1>JavaScipt Group Project</h1>
    <p className="project-brief">Create a browser game based on an existing card or dice game. Model the game logic and then display it in the browser for a user to interact with. For this project the team decided to create the classic card game Pairs.
    </p>
    <dl className="mvp">
      <dt>MVP</dt>
      <dd>Play a single player game of Pairs</dd>
      <dd>Query a cards API and display interactive cards</dd>
    </dl>

    <dl className="extensions">
      <dt>Extensions</dt>
      <dd>Create a two player game</dd>
      <dd>Display a live scoreboard</dd>
      <dd>Track and display previous moves</dd>
      <dd>Track game history</dd>
    </dl>

    <dl className="Contributors">
    <dt>Contributors</dt>
    <dd>Ruaridh Dunbar</dd>
    <dd>Connor Rose</dd>
    <dd>Brian Cooke</dd>
    <dd>Daniel Childs</dd>
    </dl>



  </div>
  ) // end of return
} // end of About

export default About
