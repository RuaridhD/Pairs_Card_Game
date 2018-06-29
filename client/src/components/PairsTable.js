import React, {Component} from 'react'
import Tile from "./Tile.js"

class PairsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.handleTileClick = this.handleTileClick.bind(this);
    this.enableTiles= this.enableTiles.bind(this);
    this.disableTiles = this.disableTiles.bind(this);

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

  event.target.innerText = this.props.deck[event.target.value].value;

  event.target.disabled = true;
  if (tempCounter === 2){
    this.disableTiles();
    setTimeout(this.enableTiles, 2000);
    this.setState({counter: 0});
  }
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
