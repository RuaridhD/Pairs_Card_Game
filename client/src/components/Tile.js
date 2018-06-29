import React, {Component} from 'react';

class Tile extends Component {
  render() {
    return(
      <button id={this.props.card} onClick={this.props.onClickMethod}></button>
    )
  }

}

export default Tile
