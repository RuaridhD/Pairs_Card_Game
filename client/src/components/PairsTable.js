import React, {Component} from 'react'
import Tile from "./Tile.js"

class PairsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      card1Value: null,
      card1Index: null,
      card2Value: null,
      card2Index: null
    }
    this.handleTileClick = this.handleTileClick.bind(this);
    this.enableTiles= this.enableTiles.bind(this);
    this.disableTiles = this.disableTiles.bind(this);
    this.checkPairs = this.checkPairs.bind(this);

  }
  render() {

    const populatedCards = this.props.deck.map((card, index) => (
      <Tile key={index} onClickMethod={this.handleTileClick} index={index}/>
    )
  )

  return(
    <div>
      <p>Pairs table</p>
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


  event.target.innerText = this.props.deck[event.target.value].value;

  event.target.disabled = true;
  if (tempCounter === 2){
    this.setState({card2Value: this.props.deck[event.target.value].value})
    this.setState({card2Index: event.target.id})
    this.disableTiles();
    setTimeout(this.checkPairs, 2000);
    this.setState({counter: 0});
  }
}

checkPairs(){

  console.log("in check pairs");
  const button1 = document.getElementById(this.state.card1Index)
  const button2 = document.getElementById(this.state.card2Index)

  if(this.state.card1Value === this.state.card2Value){
    button1.hidden = true;
    button2.hidden = true;
  }

  button1.innerText = ""
  button2.innerText = ""

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
}
// changeTilesState(value){
//   const buttons = document.querySelectorAll('.tile-button')
//   buttons.forEach(button => {
//   button.disabled = value ;
//   })
// }

export default PairsTable
