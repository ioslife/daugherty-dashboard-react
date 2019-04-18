import React, { Component } from 'react'
import '../../styles/Footer/index.css'
import Marquee from 'react-smooth-marquee'

export default class Footer extends Component {
  
  render() {
    return (
      <div className="footer">
        <Marquee velocity='.3'>
          {this.props.text}
        </Marquee>
      </div>
    )
  }
}