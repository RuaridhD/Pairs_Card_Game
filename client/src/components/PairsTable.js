import React, {Component} from 'react'
import Tile from "./Tile.js"
import './pairsTable.css'
const cardImage = require("./Card.png")


class PairsTable extends Component {
  constructor(props) {
    super(props);

    this.state = this.returnInitialState();
    this.handleTileClick = this.handleTileClick.bind(this);
    this.enableTiles= this.enableTiles.bind(this);
    this.disableTiles = this.disableTiles.bind(this);
    this.checkPairs = this.checkPairs.bind(this);
    this.reset = this.reset.bind(this);
    this.showTiles = this.showTiles.bind(this);

  }
  render() {
    const populatedCards = this.props.deck.map((card, index) => (
      <Tile key={index} onClickMethod={this.handleTileClick} index={index}/>
    )
  )

  return(
    <div id="pairs-table-container">
      <div id="pairs-table">
        {populatedCards}
      </div>
      <button onClick={this.reset}>Reset</button>
    </div>
  )
} // end of render

handleTileClick(event) {

  var tempCounter = this.state.counter;

  this.setState({counter: tempCounter += 1});

  if(tempCounter === 1 ){
    this.setState({card1Value: this.props.deck[event.target.value].value})
    this.setState({card1Index: event.target.id})

    this.setState({pairFlag: false});
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

    setTimeout(this.checkPairs, 1000);
    this.setState({counter: 0});

    this.updateTurnsTaken();

    if(!this.state.pairFlag){

      var currentIndex = this.state.currentPlayerIndex;
      if((currentIndex + 1) === this.state.players.length){
        currentIndex = 0
      }else{
        currentIndex += 1
      }

      this.setState({currentPlayerIndex: currentIndex})
    }
  }
}

updateTurnsTaken(){
  const player = this.state.players[this.state.currentPlayerIndex]

  var turnCounter = this.state.turnsTaken[player];

  var duplicateTurnsTaken = this.state.turnsTaken;

  duplicateTurnsTaken[player] = turnCounter + 1;
  this.setState({
    turnsTaken: duplicateTurnsTaken
  })
}

checkPairs(){

  const button1 = document.getElementById(this.state.card1Index)
  const button2 = document.getElementById(this.state.card2Index)

  if(this.state.card1Value === this.state.card2Value){
    this.setState({pairFlag: true});

    button1.hidden = true;
    button2.hidden = true;

    this.updatePairsFound()
  }

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

showTiles(){
  const buttons = document.querySelectorAll('.tile-button')
  buttons.forEach(button => {
    button.hidden = false;
  })
}

reset(){
  this.setState(this.returnInitialState());
  // I have an inkling this is wrong.
  this.props.resetMethod();
  this.showTiles();
}

returnInitialState(){

  return {
    counter: 0,
    card1Value: null,
    card1Index: null,
    card2Value: null,
    card2Index: null,
    pairsFound: this.initialisePairsFound(),
    turnsTaken: this.initialiseTurnsTaken(),
    players: this.props.players,
    currentPlayerIndex: 0,
    pairFlag: false
  }

}

initialisePairsFound() {
  // create new object
  const pairsFound = {}
  //create key for each player in players array,
  this.props.players.forEach(player => {
    // pairsFound.merge(player, 0)
    pairsFound[player] = 0
  })
  return pairsFound;
  console.log(pairsFound);
  // initialise value to 0
  // return new obect
}

initialiseTurnsTaken(){
  const turnsTaken = {}
  //create key for each player in players array,
  this.props.players.forEach(player => {
    // pairsFound.merge(player, 0)
    turnsTaken[player] = 0
  })
  return turnsTaken;
}

updatePairsFound(){
  const player = this.state.players[this.state.currentPlayerIndex];
  var pairsCounter = this.state.pairsFound[player];
  var duplicatePairsFound = this.state.pairsFound;
  duplicatePairsFound[player] = pairsCounter + 1;
  this.setState({
    pairsFound: duplicatePairsFound
  })
}


}




export default PairsTable
