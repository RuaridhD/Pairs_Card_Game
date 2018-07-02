import React, {Component} from 'react'

class PlayersSelector extends Component {

  render() {
    return(
      <div>
        <h2>Player Selection</h2>
        <button id="1-player">1 Player</button>
        <button id="2-players">2 Players</button>
        <button id="3-players">3 Players</button>
        <button id="4-players">4 Players</button>
      </div>
    )

}

}

export default PlayersSelector;
