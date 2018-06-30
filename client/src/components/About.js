import React from 'react'

const About = () => {
  return (
  <div>
    <p className="project-brief">Create a browser game based on an existing card or dice game. Model the game logic and then display it in the browser for a user to interact with.</p>
    <p className="title">For this project the team decided to create the classic card game Pairs.</p>
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
  </div>
  ) // end of return
} // end of About

export default About
