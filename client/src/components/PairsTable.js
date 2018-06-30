import React, {Component} from 'react'
import Tile from "./Tile.js"
const cardImage = require("./Card.png")

class PairsTable extends Component {
  constructor(props) {
    super(props);

    const initialState = {
      counter: 0,
      card1Value: null,
      card1Index: null,
      card2Value: null,
      card2Index: null,
      pairsFound: 0,
      turnsTaken: 0
    }

    this.state = initialState;
    this.handleTileClick = this.handleTileClick.bind(this);
    this.enableTiles= this.enableTiles.bind(this);
    this.disableTiles = this.disableTiles.bind(this);
    this.checkPairs = this.checkPairs.bind(this);
    this.reset = this.reset.bind(this);

  }
  render() {
    const populatedCards = this.props.deck.map((card, index) => (
      <Tile key={index} onClickMethod={this.handleTileClick} index={index}/>
    )
  )

  return(
    <div id="pairs-table">
      <p>Pairs table</p>
      <button onClick={this.reset}>Reset</button>
      {populatedCards}
    </div>
  )
} // end of render

handleTileClick(event) {
  var tempCounter = this.state.counter;

  this.setState({counter: tempCounter += 1});

  if(tempCounter ===1 ){
    this.setState({card1Value: this.props.deck[event.target.value].value})
    this.setState({card1Index: event.target.id})
  }

  // button1.style.backgroundImage = "url('Card.png')"#
  // event.target.innerText = this.props.deck[event.target.value].value;
  const image = this.props.deck[event.target.value].image;
  event.target.style.backgroundImage = `url(${image})`;

  event.target.disabled = true;
  if (tempCounter === 2){
    this.setState({card2Value: this.props.deck[event.target.value].value})
    this.setState({card2Index: event.target.id})
    this.disableTiles();
    setTimeout(this.checkPairs, 2000);
    this.setState({counter: 0});
    var turnCounter = this.state.turnsTaken;
    this.setState({turnsTaken: turnCounter + 1})
  }
}

checkPairs(){

  const button1 = document.getElementById(this.state.card1Index)
  const button2 = document.getElementById(this.state.card2Index)

  if(this.state.card1Value === this.state.card2Value){
    button1.hidden = true;
    button2.hidden = true;
    var pairsCounter = this.state.pairsFound;
    this.setState({pairsFound: pairsCounter + 1})
  }

  // this.props.deck[this.state.card1Index].image

  button1.style.backgroundImage = `url(${cardImage})`
  button2.style.backgroundImage = `url(${cardImage})`

  this.enableTiles()
}

disableTiles(){
  const buttons = document.querySelectorAll('.tile-button')
  buttons.forEach(button => {
    button.disabled = true;
  })
}

enableTiles(){
  const buttons = document.querySelectorAll('.tile-button')
  buttons.forEach(button => {
    button.disabled = false;
  })
}

reset(){

  this.setState({
      turnsTaken: 0
  })

  this.props.resetMethod();

}


}




export default PairsTable
