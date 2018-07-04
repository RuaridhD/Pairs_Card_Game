import React,{Component} from 'react'

class PlayerForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      player: ''
    }

    this.handlePlayerAdd = this.handlePlayerAdd.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handlePlayerDelete = this.handlePlayerDelete.bind(this)
  }

  handleTextChange(event){
    this.setState({player: event.target.value})
  }

  handlePlayerAdd(event) {
    event.preventDefault()
    const submittedPlayer = this.state.player;
    this.props.onPlayerSubmit({player: submittedPlayer});
  }

  handlePlayerDelete(event){
    this.props.onPlayerDelete(event.target.value)
  }



  render(){
    let existingPlayers = this.props.players.map((player, index) => (
      <div id = "map-players">
        <li key = {player._id}>
          {player.Player}
          <button className="delete-button" onClick={this.handlePlayerDelete} value={player._id}>
            Delete Button
          </button>
        </li>
      </div>
    ))


    return (
      <div id = "create-list">
        <div id = "create">
          <p>Players page</p>
          <form className="create-form" onSubmit={this.handlePlayerAdd}>
            <input type="text" placeholder="Enter User Name" value={this.state.player} onChange={this.handleTextChange}/>
            <input type="submit" value="Create A Player"/>
          </form>
        </div>

        <div id = "list">
          <ul>
            {existingPlayers}
          </ul>
        </div>
      </div>
    ) // end of return
  } // end of players
}

export default PlayerForm;
