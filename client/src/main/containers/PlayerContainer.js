import React, {Component} from 'react'
import PlayerForm from '../../games/pairs/components/PlayerForm.js'

class PlayerContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getAllPlayers = this.getAllPlayers.bind(this);
  }


  handleTextChange(event){
    this.setState({text: event.target.value})
  }

  componentDidMount(){
    const url = '/api/users'
    fetch(url)
    .then(res => res.json())
    .then(players =>
      this.setState({
        players: players
      }));
    }

    getAllPlayers(){
      const url = '/api/users'
      fetch(url)
      .then(res => res.json())
      .then(players =>
        this.setState({
          players: players
        }));
      }

      handleSubmit(event){
        const player = event.player;
        if (!player){
          return
        }
        const url = 'http://localhost:3001/api/users'

        fetch(url, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({"Player": player})
        })
        .then(response => response.json())
        .catch(error => console.error(`Fetch Error =\n`, error))
        .then(this.setState({
          players: this.state.players}))
          .then(this.getAllPlayers())
        } // end of handleSubmit

        handleDelete(id){
          const url = 'http://localhost:3001/api/users/delete/' + id
          fetch(url, {
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE',
          })
          .catch(error => console.error(`Fetch Error =\n`, error))
          .then(this.getAllPlayers())
        }

        render(){
          return (<PlayerForm players={this.state.players} onPlayerSubmit={this.handleSubmit} onPlayerDelete={this.handleDelete}/>

          )// end of return
        } // end of render
      }  // end of class



      export default PlayerContainer;
