import React, { Component } from 'react'
import '../../styles/Footer/index.css'

export default class Footer extends Component {
  
  render() {
    return (
      <div className="footer">
        <p className="marquee">
          {this.props.text}
        </p>
      </div>
    )
  }
}