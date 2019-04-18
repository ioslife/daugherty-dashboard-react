import React, { Component } from 'react'
import image from '../../apple-touch-icon.png'
import '../../styles/Logo/index.css'
export default class Logo extends Component {
    render() {
      return (
        <img className='appLogo' src={image} alt='' />     
      )
    }
}