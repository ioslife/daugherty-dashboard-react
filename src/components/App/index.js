import React, { Component } from 'react';
import '../../styles/App/index.css';
import VideoEmbed from '../VideoEmbed'
import Welcome from '../Welcome'
import image from './logo.png'
import Bottom from '../Bottom'

class App extends Component {
  render() {
    return (
      <div className="appDiv">
        <div className="dbsLogo">
          <img src={image} alt='Daugherty Business Solutions'></img>
        </div>
        
        <VideoEmbed/>
        <Welcome/>
        <Bottom/>
      </div>
    );
  }
}

export default App;
