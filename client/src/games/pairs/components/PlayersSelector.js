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
    if((this.state.activePlayers.length !== parseInt(this.state.numberOfPlayers, 10))&&(dropdown.value !== "$default$")&&(!this.state.activePlayers.includes(dropdown.value))){
      const duplicateArray = this.state.activePlayers
      duplicateArray.push(dropdown.value)
      this.setState({
        activePlayers: duplicateArray
      })
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
      const playersList = this.state.players.map((player, index) => {
        if(this.state.activePlayers.includes(player)){
          return <option key={index} id={player} value={player} disabled>{player}</option>
        } else {
          return <option key={index} id={player} value={player}>{player}</option>
        }
      })

      const tableList = this.state.activePlayers.map((player, index) => (
        <tr key={index}>
          <td >{player}</td>
        </tr>
      ))

      renderPlayers =
      <div className="players-selector-div">
        <div>
          <select id="player-dropdown">
            <option hidden disabled selected value="$default$">Select a player...</option>
            {playersList}
          </select>
        </div>

        <table>
          <tbody>
          <tr>
            <th>Players</th>
          </tr>

          {tableList}
          </tbody>
        </table>
        <button onClick={this.addPlayerToTable}>Add Player</button>
        <button onClick={this.startButtonClicked}>Start Game</button>

      </div>
    } else {
      renderPlayers =
      <div className="players-selector-div">
        <h2>How many players?</h2>
        <div className="players-selector-btns-div">
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
