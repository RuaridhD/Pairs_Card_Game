import React, {Component} from 'react'
import PairsTable from "../components/PairsTable.js"
import './public/pairContainer.css'
import PlayersSelector from '../components/PlayersSelector.js'


class PairContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      players: []
    }
    this.resetGameNewPlayers = this.resetGameNewPlayers.bind(this);
    this.resetGameSamePlayers = this.resetGameSamePlayers.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  render() {

    var gameRender = null;
    if (this.state.players.length === 0){
      gameRender = <PlayersSelector startGame={this.startGame}/>
    }else {
      gameRender = <PairsTable deck={this.state.deck} resetGameSamePlayers={this.resetGameSamePlayers} resetGameNewPlayers={this.resetGameNewPlayers} players={this.state.players}/>
    }

    return (
      <div id="pair-container">
        {gameRender}
      </div>
    )
  }

  componentDidMount(){
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    fetch(url)
    .then(res => res.json())
    .then(Deck => this.setState({deck: Deck.cards}))
  }

  resetGameNewPlayers(){
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    fetch(url)
    .then(res => res.json())
    .then(Deck => this.setState({deck: Deck.cards, players: []}))
  }

  resetGameSamePlayers(){
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    fetch(url)
    .then(res => res.json())
    .then(Deck => this.setState({deck: Deck.cards}))
  }

  startGame(playersArray) {
    this.setState({
      players: playersArray
    })
  }

}

export default PairContainer;
