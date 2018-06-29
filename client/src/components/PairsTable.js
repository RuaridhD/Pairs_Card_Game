import React, {Component} from 'react'
import Tile from "./Tile.js"

class PairsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [1,2,3]
    }
  }
  render() {

    const populatedCards = this.state.cards.map((card) => (
      <Tile card={card}/>
    )
  )

  return(
    <div>
      <p>Pairs table</p>
      {populatedCards}
    </div>
  )
} // end of render

} // end of class

export default PairsTable
