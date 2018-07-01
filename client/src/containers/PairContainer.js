import React, {Component} from 'react'
import PairsTable from "../components/PairsTable.js"
import './pairContainer.css'

class PairContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      players: ["Player 1", "Player 2", "Player 3"]
    }
    this.resetGame = this.resetGame.bind(this);
  }

  render() {
    return (
      <div id="pair-container">
        <p>This is a pairs containers</p>
      <PairsTable deck={this.state.deck} resetMethod={this.resetGame} players={this.state.players}/>
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
    // this.forceUpdate();
    console.log("test");
    // window.location.reload();
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    fetch(url)
    .then(res => res.json())
    .then(Deck => this.setState({deck: Deck.cards}))
  }



}



export default PairContainer;
