import React, { Component } from 'react';
import PairContainer from "./containers/PairContainer"
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return(
      <PairContainer />
    )

  } //end of render
} // end of class

export default App;
