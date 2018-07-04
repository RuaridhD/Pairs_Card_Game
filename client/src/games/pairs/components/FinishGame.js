import React,{Component} from 'react'
import './public/finishGame.css'

class FinishGame extends Component {

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

  render () {
    const gameStats = this.sortPlayers();

    var tableData = gameStats.map((player, index) => (
      <tr key={index}>
        <td className={"position" + index}>{index + 1 + '.'}</td>
        <td className={"position" + index}>{player[0]}</td>
        <td className={"position" + index}>{player[1]}</td>
      </tr>
    ))

    return (

      <div id="finish-game-div">
      <div id="table-div">
        <table id="result-table">
          <tbody>
          {tableData}
        </tbody>
        </table>
        </div>

        <div id ="new-game-button-div">
        <button className="new-game-button" onClick={this.props.resetGameSamePlayers}>Play Again</button>
        <button className="new-game-button" onClick={this.props.resetGameNewPlayers}>New Game</button>
      </div>

      </div>
    )
  }// end of render

} // end of class

export default FinishGame;
