import React, {Component} from 'react';
import './tile.css';

class Tile extends Component {
  render() {
    return(
      <div id="tile-div">
      <button id = {this.props.index} className="tile-button" value={this.props.index} onClick={this.props.onClickMethod}></button>
      </div>
    )
  }

}

export default Tile
