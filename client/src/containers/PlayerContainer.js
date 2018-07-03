import React, {Component} from 'react'
import PlayerForm from '../components/PlayerForm.js'

class PlayerContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: '',
      players: []
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event){
      event.preventDefault()
      var player = this.state.player.trim()
      if (!player){
        return
      }
      this.setState({player: player})


    }





    render(){
      return (<PlayerForm players={this.state.players}/>)
    }

  }

  export default PlayerContainer;
