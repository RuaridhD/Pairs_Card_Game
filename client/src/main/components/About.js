import React from 'react'
import './public/About.css'

const About = () => {
  return (
    <div id="body">
      <h1>JavaScript Group Project</h1>
      <div id="project-brief">
      <p>Create a browser game based on an existing card or dice game. Model the game logic and then display it in the browser for a user to interact with. For this project the team decided to create the classic card game Pairs.
      </p>
      </div>
      <div id='mvp'>
        <dl>
          <dt>MVP</dt>
          <dd>Play a single player game of Pairs</dd>
          <dd>Query a cards API and display interactive cards</dd>
        </dl>
      </div>

      <div id="extensions">
        <dl>
          <dt>Extensions</dt>
          <dd>Create a two player game</dd>
          <dd>Display a live scoreboard</dd>
          <dd>Track and display previous moves</dd>
          <dd>Track game history</dd>
        </dl>
      </div>

      <div id="contributors">

        <table>
          <tbody>
          <tr>
            <th>Ruaridh Dunbar</th>
            <th>Connor Rose</th>
            <th>Brian Cooke</th>
            <th>Daniel Childs</th>
          </tr>
          <tr>
            <td>
              <a href="https://www.linkedin.com/in/ruaridh-dunbar/">
              <img src="https://media.licdn.com/dms/image/C4E03AQGe4OnflyXvtw/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=uE-dOR4_E3hLx_JAmwHutdIC9tg0HueIIHN8QDbXQ3M" alt="Ruaridh"/>
            </a>
            </td>
            <td>
              <a href="https://www.linkedin.com/in/connor-rose/">
              <img src="https://media.licdn.com/dms/image/C4D03AQGGUzjKBm3aqQ/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=QjUd0Mc80mwUENu9ZwhavriQdBZd19BDz_uLqBx3pEA" alt="Connor"/>
              </a>
            </td>
            <td>
              <a href="https://www.linkedin.com/in/b-cooke/">
              <img src="https://media.licdn.com/dms/image/C5603AQECbkPCd0QoPA/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=p6-uw8Wfs9_rODFdmpoNS9si2bIbUpe0OaM_kry2KUU" alt="Brian"/>
            </a>
            </td>
            <td>
              <a href="https://www.linkedin.com/in/dchilds1/">
              <img src="https://media.licdn.com/dms/image/C4D03AQEjBknAUodZLw/profile-displayphoto-shrink_200_200/0?e=1536192000&v=beta&t=NXWNthMTcIudT9jF-gbAG4zDf6ijloZPpublVJYK2pM" alt="Daniel"/>
            </a>
            </td>
          </tr>
          <tr>
            <td>LinkedIn Profile</td>
            <td>LinkedIn Profile</td>
            <td>LinkedIn Profile</td>
            <td>LinkedIn Profile</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  ) // end of return
} // end of About

export default About
