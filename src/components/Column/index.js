import React, { Component } from 'react'
import '../../styles/Column/index.css'

export default class Column extends Component {
    render() {
      return (
          <div className='welcomeCol col-md-4' dangerouslySetInnerHTML={{ __html: this.props.column}} />
      )
    }
}