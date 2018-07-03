import React, {Component} from 'react'
import './public/playersSelector.css'

class PlayersSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfPlayers: null,
      selectorFlag: false,
      players: [],
      activePlayers: []
    }
    this.selectNumberOfPlayers = this.selectNumberOfPlayers.bind(this)
    this.addPlayerToTable = this.addPlayerToTable.bind(this)
    this.startButtonClicked = this.startButtonClicked.bind(this)
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

  addPlayerToTable() {
    const dropdown = document.querySelector("#player-dropdown")
    if((this.state.activePlayers.length !== parseInt(this.state.numberOfPlayers, 10))&&(dropdown.value !== "$default$")){
      const duplicateArray = this.state.activePlayers
      duplicateArray.push(dropdown.value)
      this.setState({
        activePlayers: duplicateArray
      })
    }
    if (this.state.activePlayers.length === parseInt(this.state.numberOfPlayers, 10)){
      const addButton = document.querySelector("#add-player-btn")
      addButton.hidden = true;
      const startButton = document.querySelector("#start-game-btn")
      startButton.hidden = false;
    }
  }

  startButtonClicked() {
    if(this.state.activePlayers.length === parseInt(this.state.numberOfPlayers, 10)){
      this.props.startGame(this.state.activePlayers)
    }
  }

  render() {
    var renderPlayers = null;
    if (this.state.selectorFlag) {
      const playersList = this.state.players.map(player => {
        if(this.state.activePlayers.includes(player)){
          return <option id={player} value={player} disabled>{player}</option>
        } else {
          return <option id={player} value={player}>{player}</option>
        }
      })

      const tableList = this.state.activePlayers.map(player => (
        <tr>
          <td className="players-table-data">{player}</td>
        </tr>
      ))

      renderPlayers =
      <div id="name-selector-div">

        <div id="players-table-div">
          <table id="players-table">
            <tr>
              <th className="players-table-heading">Players</th>
            </tr>
            {tableList}
          </table>
        </div>

        <div id="dropdown-and-buttons">
          <div id="player-dropdown-div">
            <select id="player-dropdown">
              <option hidden disabled selected value="$default$">Select a player...</option>
              {playersList}
            </select>
          </div>

          <div id="name-selector-btn-div">
            <button id="add-player-btn" className="name-selector-btn" onClick={this.addPlayerToTable}>Add Player</button>
            <button id="start-game-btn" hidden className="name-selector-btn" onClick={this.startButtonClicked}>Start Game</button>
          </div>
        </div>
      </div>
    } else {
      renderPlayers =
      <div id="number-selector-div">
        <h2 id="number-heading">How many players?</h2>
        <div id="players-selector-btns-div">
          <button id="1-player" className="players-selector-btn" onClick={this.selectNumberOfPlayers} value="1">1 Player</button>
          <button id="2-players" className="players-selector-btn" onClick={this.selectNumberOfPlayers} value="2">2 Players</button>
          <button id="3-players" className="players-selector-btn" onClick={this.selectNumberOfPlayers} value="3">3 Players</button>
          <button id="4-players" className="players-selector-btn" onClick= {this.selectNumberOfPlayers} value="4">4 Players</button>
        </div>
      </div>
    }

    return(
      <div id="players-selector-container">
        {renderPlayers}
      </div>
    )
  }

}

export default PlayersSelector;
