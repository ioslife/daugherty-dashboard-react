import React, { Component } from 'react'
import '../../styles/Bottom/index.css'
import Marquee from 'marquee-react-dwyer'

export default class Bottom extends Component {

    render() {
      return (
        <div className="bottom">
          <p class="marquee">
            2019 <b>Best and Brightest</b> Companies to Work for.   
            Fully staffed in-house Development Center.   
            Over 300 Architects and Senior Software Engineers.   
            Optimized for <b>speed, quality, and cost efficiency</b>.
            
          </p>
        </div>
      )
    }
}