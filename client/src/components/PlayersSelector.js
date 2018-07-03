import React, {Component} from 'react'
import './playersSelector.css'

class PlayersSelector extends Component {

  render() {
    return(
      <div id="players-selector-container">
        <div id="players-selector-div">
          <h2>How many players?</h2>
          <div id="players-selector-btns-div">
            <button id="1-player" class="players-selector-btn" onClick={this.props.buttonClick} value="1">1 Player</button>
            <button id="2-players" class="players-selector-btn" onClick={this.props.buttonClick} value="2">2 Players</button>
            <button id="3-players" class="players-selector-btn" onClick={this.props.buttonClick} value="3">3 Players</button>
            <button id="4-players" class="players-selector-btn" onClick={this.props.buttonClick} value="4">4 Players</button>
          </div>
        </div>
      </div>
    )

  }

}

export default PlayersSelector;
