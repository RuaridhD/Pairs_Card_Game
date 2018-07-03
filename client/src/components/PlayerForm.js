import React,{Component} from 'react'

class PlayerForm extends Component {



  render(){
        console.log(this.props.players);

    let existingPlayers = this.props.players.map(player => (
      <li key = {player._id}>
        {player.Player}
      </li>
    ))

    return (
      <div>
        <div>
          <p>Players page</p>
          <form className="create-form">
            <input type="text" placeholder="Enter User Name" value={this.props.player} onChange={this.handleTextChange}/>
            <input type="submit" value="Create" onSubmit={this.handleSubmit}/>
          </form>
        </div>
        <div>
          <ul>
            <li>{existingPlayers}</li>
          </ul>
        </div>
      </div>
    ) // end of return
  } // end of players
}

export default PlayerForm;
