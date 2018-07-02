import React, {Component} from 'react'
import PairsTable from "../components/PairsTable.js"
import './pairContainer.css'
import PlayersSelector from '../components/PlayersSelector.js'


class PairContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      players: []
    }
    this.resetGame = this.resetGame.bind(this);
  }

  // removed this <p>This is a pairs containers</p>

  render() {

    var test = null;
    if (this.state.players.length === 0){
      test = <PlayersSelector/>
    }else {
      test = <PairsTable deck={this.state.deck} resetMethod={this.resetGame} players={this.state.players}/>
    }

    return (


      <div id="pair-container">
        {test}
      </div>
    )
  }

componentDidMount(){
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    fetch(url)
    .then(res => res.json())
    .then(Deck => this.setState({deck: Deck.cards}))
  }

  resetGame(){
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    fetch(url)
    .then(res => res.json())
    .then(Deck => this.setState({deck: Deck.cards}))
  }



}



export default PairContainer;
