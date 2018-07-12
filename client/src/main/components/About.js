import React from 'react'
import './public/About.css'

const About = () => {
  return (

    <div id="about-container">

      <div id="container-about-left">

        <div id="contributors">

          <div>
            <a href="https://www.linkedin.com/in/ruaridh-dunbar/">
            <img src="https://media.licdn.com/dms/image/C4E03AQGe4OnflyXvtw/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=uE-dOR4_E3hLx_JAmwHutdIC9tg0HueIIHN8QDbXQ3M" alt="Ruaridh"/>
          </a>
          <p>Ruaridh Dunbar</p>
        </div>


        <div>
          <a href="https://www.linkedin.com/in/connor-rose/">
          <img src="https://media.licdn.com/dms/image/C4D03AQGGUzjKBm3aqQ/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=QjUd0Mc80mwUENu9ZwhavriQdBZd19BDz_uLqBx3pEA" alt="Connor"/>
        </a>
        <p>Connor Rose</p>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/b-cooke/">
        <img src="https://media.licdn.com/dms/image/C5603AQECbkPCd0QoPA/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=p6-uw8Wfs9_rODFdmpoNS9si2bIbUpe0OaM_kry2KUU" alt="Brian"/>
      </a>
      <p>Brian Cooke</p>
    </div>

    <div>
      <a href="https://www.linkedin.com/in/dchilds1/">
      <img src="https://media.licdn.com/dms/image/C4D03AQEjBknAUodZLw/profile-displayphoto-shrink_200_200/0?e=1536192000&v=beta&t=NXWNthMTcIudT9jF-gbAG4zDf6ijloZPpublVJYK2pM" alt="Daniel"/>
    </a>
    <p>Daniel Childs</p>
  </div>

</div>
</div>


<div id="container-about-center">

  <div id="about-heading-div">
    <h1 id="about-heading">JavaScript Group Project</h1>
  </div>

  <div id="project-div">

    <div id="project-brief">

      <p>Create a browser game based on an existing card or dice game. Model the game logic and then display it in the browser for a user to interact with. For this project the team decided to create the classic card game Pairs.
      </p>
    </div>

    <div id="mvp-extensions-div">
      <div id='mvp'>
        <h3>MVP</h3>
        <ul>
          <li class="brief-list">Play a single player game of Pairs</li>
          <li class="brief-list">Query a cards API and display interactive cards</li>
        </ul>
      </div>

      <div id="extensions">
        <h3>Extensions</h3>
        <ul>
          <li class="brief-list">Create a two player game</li>
          <li class="brief-list">Display a live scoreboard</li>
          <li class="brief-list">Track and display previous moves</li>
          <li class="brief-list">Track game history</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div id="container-about-right">
  <div id="contact-div">
    <div id="ruaridh-div">
      <p>Ruaridh Dunbar</p>
      <a href="https://www.linkedin.com/in/ruaridh-dunbar/">LinkedIn
    </a>
  </div>


  <div id="connor-div">
    <p>Connor Rose</p>
    <a href="https://www.linkedin.com/in/connor-rose/">
  </a>
</div>

<div id="brian-div">
  <p>Brian Cooke</p>
  <a href="https://www.linkedin.com/in/b-cooke/">
</a>
</div>

<div id="daniel-div">
  <p>Daniel Childs</p>
  <a href="https://www.linkedin.com/in/dchilds1/">
</a>
</div>
</div>

</div>



</div>
) // end of return
} // end of About

export default About
