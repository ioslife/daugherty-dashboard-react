import React, { Component } from 'react'
import '../../styles/VideoEmbed/index.css'
import {fetchVideos} from '../../services/pullVideos'

export default class VideoEmbed extends Component {

  

    render() {
      var func = () => {
        var videos = fetchVideos()
        console.log(videos)
      }
      return (
        <div className="videoDiv col-md-8">
          {func()}
        </div>
      )
    }
}