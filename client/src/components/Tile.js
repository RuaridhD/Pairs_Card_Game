import React, {Component} from 'react';

class Tile extends Component {
  render() {
    return(
      <button className="tile-button" value={this.props.index} onClick={this.props.onClickMethod}></button>
    )
  }

}

export default Tile
