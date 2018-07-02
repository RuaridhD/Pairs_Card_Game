import React from 'react'
import Contributors from './Contributors.js'
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
    <dd>Ruaridh Dunbar
      <img src="https://media.licdn.com/dms/image/C4E03AQGe4OnflyXvtw/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=uE-dOR4_E3hLx_JAmwHutdIC9tg0HueIIHN8QDbXQ3M" alt="Ruaridh" height="50"/>
    </dd>
    <dd>Connor Rose

      <img src="https://media.licdn.com/dms/image/C4D03AQGGUzjKBm3aqQ/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=QjUd0Mc80mwUENu9ZwhavriQdBZd19BDz_uLqBx3pEA" alt="Connor" height="50"/>
    </dd>
    <dd>Brian Cooke
            <img src="https://media.licdn.com/dms/image/C5603AQECbkPCd0QoPA/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=p6-uw8Wfs9_rODFdmpoNS9si2bIbUpe0OaM_kry2KUU" alt="Brian" height="50"/>
    </dd>
    <dd>Daniel Childs
      <img src="https://media.licdn.com/dms/image/C4D03AQEjBknAUodZLw/profile-displayphoto-shrink_200_200/0?e=1536192000&v=beta&t=NXWNthMTcIudT9jF-gbAG4zDf6ijloZPpublVJYK2pM" alt="Daniel" height="50"/>
    </dd>
    </dl>





  </div>
  ) // end of return
} // end of About

export default About
