import React, { Component } from 'react';

import PairContainer from "./containers/PairContainer";
import PlayerContainer from "./containers/PlayerContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from './components/About';
import PlayerForm from './components/PlayerForm'
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
