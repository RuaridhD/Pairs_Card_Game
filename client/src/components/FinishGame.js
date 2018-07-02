import React,{Component} from 'react'
import './finishGame.css'

class FinishGame extends Component {
  render () {
    // here we want to loop through all of the players to see who has the most pairs. Then populate
    // a table with the player with the most pairs at the top.

    const gameStats = this.sortPlayers();

    var counter = 1;
    var tableData = gameStats.map((player, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{player[0]}</td>
        <td>{player[1]}</td>
      </tr>
    ))

    return (
<<<<<<< HEAD
      <div id="results-div">
        <div id="table-div">
          <table id="result-table">
            <tr>
              <th>Position</th>
              <th>Player</th>
              <th>Score</th>
            </tr>
            {tableData}
          </table>
        </div>
=======
      <div id="table-div">
        <table id="result-table">
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
          {tableData}
        </table>
        <button onClick={this.props.resetGameSamePlayers}>Reset Game - Same Players</button>
        <button onClick={this.props.resetGameNewPlayers}>Reset Game - New Players</button>
>>>>>>> 41a1165c673a71a1ed33eec91d799e695c735f66
      </div>
    )
  }// end of render

  sortPlayers() {
    var gameStats = []
    for (var player in this.props.pairs){
      gameStats.push([player, this.props.pairs[player]])
    }
    gameStats.sort(function(a, b) {
      return b[1] - a[1];
    })
    return gameStats
  }

} // end of class

export default FinishGame;
