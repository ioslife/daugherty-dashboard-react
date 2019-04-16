import React, { Component } from 'react'
import '../../styles/Column/index.css'

export default class Column extends Component {
    render() {
      return (
        <div className='welcomeCol'>
            <div className="welcomeText">
                Welcome to <b>Daugherty</b>!
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: this.props.column}} />
        </div>
      )
    }
}