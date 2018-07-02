import React, {Component} from 'react'

class PlayersSelector extends Component {

  render() {
    return(
      <div>
        <h2>Player Selection</h2>
        <button id="1-player" onClick={this.props.buttonClick} value="1">1 Player</button>
        <button id="2-players" onClick={this.props.buttonClick} value="2">2 Players</button>
        <button id="3-players" onClick={this.props.buttonClick} value="3">3 Players</button>
        <button id="4-players" onClick={this.props.buttonClick} value="4">4 Players</button>
      </div>
    )

}

}

export default PlayersSelector;
