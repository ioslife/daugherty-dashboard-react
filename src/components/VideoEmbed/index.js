import React, { Component } from 'react'
import '../../styles/VideoEmbed/index.css'
import {fetchVideos} from '../../services/pullVideos'
var $ = require('jquery')
var HtmlToReactParser = require('html-to-react').Parser;

var func = (callback) => {
  fetchVideos(callback)
}

export default class VideoEmbed extends Component {
    constructor(props){
      super(props)
      this.state = {
        url: ''
      }
    }
    componentWillMount() {
      func((data) => {
        this.setState({url:data})
          console.log()
      })
    }
    videoController(){
      var htmlToReactParser = new HtmlToReactParser();
      if(this.state.url === ""){
        return <div></div>
      } else {
        
        var player = $(this.state.url.data[0].embed.html)
        player.addClass('video-player')
        player.width = null
        player.height = null
        player[0].src += "&autoplay=1&muted=1"
        console.log(player)
        console.log(player[0])
        console.log(player[0].outerHTML)
        console.log(this.state.url.data[0].embed.html)
        return(htmlToReactParser.parse(player[0].outerHTML))
      }
    }
    render() {
      
      return (
        <div className="videoDiv col-md-8">
          {/* <iframe className="video-player" src={this.props.url + '/embed'} frameBorder="0" title={this.props.title} allow="autoplay; fullscreen" allowFullScreen>
          </iframe> */}
          {this.videoController()}
        </div>
      )
    }
}