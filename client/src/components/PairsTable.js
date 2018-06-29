import React, {Component} from 'react'
import Tile from "./Tile.js"

class PairsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [1,2,3]
    }
    this.handleTileClick = this.handleTileClick.bind(this);
  }
  render() {

    const populatedCards = this.state.cards.map((card, index) => (
      <Tile key={index} onClickMethod={this.handleTileClick} card={card}/>
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

  console.log(event.target.id);
  event.target.innerText = event.target.id;

}

} // end of class

export default PairsTable
