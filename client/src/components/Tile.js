import React, {Component} from 'react';

class Tile extends Component {
  render() {
    return(
      <button>{this.props.card}</button>
    )
  }

}

export default Tile
