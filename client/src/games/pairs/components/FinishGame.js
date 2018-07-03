import React,{Component} from 'react'
import './public/finishGame.css'

class FinishGame extends Component {
  render () {
    // here we want to loop through all of the players to see who has the most pairs. Then populate
    // a table with the player with the most pairs at the top.

    const gameStats = this.sortPlayers();

    var tableData = gameStats.map((player, index) => (
      <tr>
        <td class={"position" + index}>{index + 1 + '.'}</td>
        <td class={"position" + index}>{player[0]}</td>
        <td class={"position" + index}>{player[1]}</td>
      </tr>
    ))

    return (

      <div id="finish-game-div">
      <div id="table-div">
        <table id="result-table">
          {tableData}
        </table>
        </div>

        <div id ="new-game-button-div">
        <button class="new-game-button" onClick={this.props.resetGameSamePlayers}>Play Again</button>
        <button class="new-game-button" onClick={this.props.resetGameNewPlayers}>New Game</button>
      </div>

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
