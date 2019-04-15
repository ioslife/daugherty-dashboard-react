import React, { Component } from 'react';
import '../../styles/App/index.css';
import MainContent from '../MainContent';
import Atlanta from '../Atlanta';
import DevCenter from '../DevCenter'
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/corp" exact component={MainContent} />
        <Route path="/atl/" exact component={Atlanta} />
        <Route path="/dev/" exact component={DevCenter} />
      </Router>
     
    );
  }
}

export default App;
