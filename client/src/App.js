import React, { Component } from 'react';

import PairContainer from "./containers/PairContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return(
    <Router>
      <React.Fragment>
        <NavBar />
          <Route exact path ='/' component={Home} />
        <PairContainer />

    </React.Fragment>
    </Router>

    )

  } //end of render
} // end of class

export default App;
