import React, { Component } from 'react'
import '../../styles/Footer/index.css'
import Marquee from 'react-smooth-marquee'

export default class Footer extends Component {
  
  render() {
    return (
      <div className="footer col-md-12">
        <Marquee velocity='.1'>
          {this.props.text}
        </Marquee>
      </div>
    )
  }
}