import React, { Component } from 'react'
import '../../styles/Welcome/index.css'

export default class Welcome extends Component {

    render() {
      return (
        <div className='welcomeCol'>
            <div className="welcomeText">Welcome to <b>Daugherty</b>!</div>
            <br/>
            <br/>
            Here is today's schedule for you:
            <ul>
                <li>
                    <b>1:00</b> - Office tour
                </li>
                <br/>
                <li>
                    <b>1:30</b> - Interview with Atlanta Branch Manager <b>Rick Mayhall</b>
                </li>
                <br/>
                <li>
                    <b>2:00</b> - Break
                </li>
                <br/>
                <li>
                    <b>3:30</b> - Interview with Client Partner <b>Jim Johnson</b>
                </li>
            </ul>
        </div>
      )
    }
}