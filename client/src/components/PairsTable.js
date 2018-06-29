import React, {Component} from 'react'
import Tile from "./Tile.js"

class PairsTable extends Component {
  constructor(props) {
    super(props);
    this.handleTileClick = this.handleTileClick.bind(this);
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
  console.log(this.props.deck);
  console.log(event.target.value);

  event.target.innerText = this.props.deck[event.target.value].value;

}

} // end of class

export default PairsTable
