import React, {Component} from 'react'
import PairsTable from "../components/PairsTable.js"


class PairContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: []
    }
    this.resetGame = this.resetGame.bind(this);
  }

  // removed this <p>This is a pairs containers</p>

  render() {
    return (
      <div>

      <PairsTable deck={this.state.deck} resetMethod={this.resetGame}/>
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
