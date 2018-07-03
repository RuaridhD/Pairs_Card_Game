import React, {Component} from 'react'
import './public/statsBox.css'
import './PairsTable.js'

class StatsBox extends Component {

  render() {
    var playersList = this.props.players.map((player,index) =>(
      <tr>
        <td className="stats-player" value={index}>{player}</td>
        <td className="stats-player" value={index}>{this.props.turns[player]}</td>
        <td className="stats-player" value={index}>{this.props.pairs[player]}</td>
      </tr>
    ))
    return (
      <div id="stats-box">
        <h3 id="stats-heading">Game Stats</h3>
        <table>
          <tr>
            <th className="stats-table-heading">Player</th>
            <th className="stats-table-heading">Turns</th>
            <th className="stats-table-heading">Pairs</th>
          </tr>
          {playersList}
        </table>
      </div>
    )
  }

}

export default StatsBox;
