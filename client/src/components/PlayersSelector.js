import React, {Component} from 'react'
import './playersSelector.css'

class PlayersSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfPlayers: null,
      selectorFlag: false,
      players: []
    }
    this.selectNumberOfPlayers = this.selectNumberOfPlayers.bind(this)
  }
  render() {

    var renderPlayers = null;

    if (this.state.selectorFlag) {
      const playersList = this.state.players.map(player => (
        <option value="">{player}</option>
      ))

      renderPlayers =
      <div>
        <select>
          <option hidden selected>Select a player...</option>
          {playersList}
        </select>

        <table>
          <tr>
            <th>Players</th>
          </tr>

          {/* {this.tablePlayers} */}

        </table>
        <button onClick="">Add Player</button>
        <button onClick="">Start Game</button>


      </div>
    } else
    {
      renderPlayers =
      <div id="players-selector-div">
        <h2>How many players?</h2>
        <div id="players-selector-btns-div">
          <button id="1-player" class="players-selector-btn" onClick={this.selectNumberOfPlayers} value="1">1 Player</button>
          <button id="2-players" class="players-selector-btn" onClick={this.selectNumberOfPlayers} value="2">2 Players</button>
          <button id="3-players" class="players-selector-btn" onClick={this.selectNumberOfPlayers} value="3">3 Players</button>
          <button id="4-players" class="players-selector-btn" onClick= {this.selectNumberOfPlayers} value="4">4 Players</button>
        </div>
      </div>
    }



    return(
      <div id="players-selector-container">
        {renderPlayers}
      </div>
    )

  }

  componentDidMount() {
    this.populatePlayers()
  }

  selectNumberOfPlayers(event) {
    this.setState({
      numberOfPlayers: event.target.value,
      selectorFlag: true
    })
  }

  populatePlayers() {
    const playersArray = [];
    const url = "/api/users";
    fetch(url)
    .then(res => res.json())
    .then(players => players.forEach(player => {
      playersArray.push(player.Player);
    })).then(playersList => this.setState({players: playersArray}))
  }

  tablePlayers() {

  }

}

export default PlayersSelector;
