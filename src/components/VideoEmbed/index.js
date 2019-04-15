import React, { Component } from 'react'
import '../../styles/VideoEmbed/index.css'
import Data from '../../data.json'

let url
export default class VideoEmbed extends Component {
    


    render() {
      console.log(this.props.page)
      if (this.props.page === "corp") {
        url = `https://vimeo.com/album/${Data.DP}/embed/`
      } else if (this.props.page === "dev") {
        url = `https://vimeo.com/album/${Data.Dev}/embed/`
      } else if (this.props.page === "atl") {
        url = `https://vimeo.com/album/${Data.GDD}/embed/`
      }

      return (
        <div className="videoDiv">
        
         <iframe className="video-player" src={url} width="960" height="540" frameBorder="0" title="GDD - SA&E 2019 Outlook with Jim Drewes" allow="autoplay; fullscreen" allowFullScreen>
         </iframe>
        </div>
      )
    }
}