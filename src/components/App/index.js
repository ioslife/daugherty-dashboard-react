import React, { Component } from 'react';
import '../../styles/App/index.css';
import MainContent from '../MainContent';
import FrontKitchen from '../FrontKitchen';
import BackKitchen from '../BackKitchen'
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/corp" exact component={MainContent} />
        <Route path="/atl/" exact component={FrontKitchen} />
        <Route path="/dev/" exact component={BackKitchen} />
      </Router>
     
    );
  }
}

export default App;
