import React, { Component } from 'react';

import PairContainer from "./games/pairs/containers/PairContainer";
import PlayerContainer from "./main/containers/PlayerContainer";
import NavBar from "./main/components/NavBar";
import Home from "./main/components/Home";
import About from './main/components/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return(
    <Router>
      <React.Fragment>
        <NavBar />
          <Route exact path ='/' component={Home} />
          <Route path = "/about" component={About} />
          <Route path = "/pairs" component={PairContainer} />
          <Route path = "/players" component={PlayerContainer} />
    </React.Fragment>
    </Router>

    )

  } //end of render
} // end of class

export default App;
