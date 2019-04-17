import React, { Component } from 'react';
import '../../styles/App/index.css';
import Lobby from '../Lobby';
import Kitchen from '../Kitchen';
import DevCenter from '../DevCenter'
import Admin from '../Admin'
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/lobby" exact component={Lobby} />
        <Route path="/kitchen" exact component={Kitchen} />
        <Route path="/dev" exact component={DevCenter} />
        <Route path="/" exact component={Admin} />
        <Route path="/logo" exact component={Logo}/>
      </Router>
     
    );
  }
}

export default App;
