import React, {Component} from 'react'
import './statsBox.css'

class StatsBox extends Component {

  render() {



    var playersList = this.props.players.map((player,index) =>(
      <tr>
        <td>{player}</td>
        <td>{this.props.turns[player]}</td>
        <td>{this.props.pairs[player]}</td>
      </tr>
    ) )



    return (
      <div id="stats-box">
        <h3>Game Stats</h3>
        <table>
          <tr>
            <th>Player Name</th>
            <th>Turns Taken</th>
            <th>Pairs Found</th>
          </tr>
          {playersList}
        </table>
      </div>
    )
  }

}

export default StatsBox;
