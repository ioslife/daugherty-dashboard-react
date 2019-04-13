import React, { Component } from 'react'
import '../../styles/VideoEmbed/index.css'

export default class VideoEmbed extends Component {

    render() {
      return (
        <div className="videoDiv">
         <iframe className="video-player" src="https://vimeo.com/album/4889070/embed/" width="960" height="540" frameBorder="0" title="GDD - SA&E 2019 Outlook with Jim Drewes" allow="autoplay; fullscreen" allowFullScreen>
         </iframe>
        </div>
      )
    }
}