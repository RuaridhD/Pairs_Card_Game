import React,{Component} from 'react'

class FinishGame extends Component {
  render () {
    // here we want to loop through all of the players to see who has the most pairs. Then populate
    // a table with the player with the most pairs at the top.

    var gameStats = []
    for (var player in this.props.pairs){
      console.log(this.props.pairs);
      gameStats.push([player, this.props.pairs[player]])
    }
      gameStats.sort(function(a, b) {
        return b[1] - a[1];
      })

      var tableData = gameStats.map((player, index) => {
        console.log(gameStats);

        {player[0]}

      
      })

    return (
      <div>
        <table>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>


        </table>
  {tableData}
        </div>

    )
  }// end of render

} // end of class

export default FinishGame;
