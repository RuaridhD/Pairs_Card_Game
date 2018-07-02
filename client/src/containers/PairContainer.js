import React, {Component} from 'react'
import PairsTable from "../components/PairsTable.js"
import './pairContainer.css'
import PlayersSelector from '../components/PlayersSelector.js'


class PairContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: [
        {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "8",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
        }
    ],
      players: []
    }
    this.resetGame = this.resetGame.bind(this);
    this.selectPlayers = this.selectPlayers.bind(this);
  }

  // removed this <p>This is a pairs containers</p>

  render() {

    var gameRender = null;
    if (this.state.players.length === 0){
      gameRender = <PlayersSelector buttonClick={this.selectPlayers}/>
    }else {
      gameRender = <PairsTable deck={this.state.deck} resetMethod={this.resetGame} players={this.state.players}/>
    }

    return (
      <div id="pair-container">
        {gameRender}
      </div>
    )
  }

componentDidMount(){
    // const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    // fetch(url)
    // .then(res => res.json())
    // .then(Deck => this.setState({deck: Deck.cards}))
  }

  resetGame(){
    // const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    // fetch(url)
    // .then(res => res.json())
    // .then(Deck => this.setState({deck: Deck.cards}))
  }

  selectPlayers(event){

      var playerNo = event.target.value;
      var playersArray = [];
      switch(playerNo) {
    case "1":
        playersArray = ["Player 1"]
        break;
    case "2":
        playersArray = ["Player 1", "Player 2"]
        break;
    case "3":
        playersArray = ["Player 1", "Player 2", "Player 3"]
        break;
    case "4":
        playersArray = ["Player 1", "Player 2", "Player 3", "Player 4"]
        break;
}
        this.setState({players: playersArray})
  }

}



export default PairContainer;
