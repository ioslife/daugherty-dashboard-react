import React, { Component } from 'react'
import '../../styles/VideoEmbed/index.css'

export default class VideoEmbed extends Component {
    render() {
      return (
        <div className="videoDiv col-md-8">
          <iframe className="video-player" src={this.props.url + '/embed'} frameBorder="0" title={this.props.title} allow="autoplay; fullscreen" allowFullScreen>
          </iframe>
        </div>
      )
    }
}