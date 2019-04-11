import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Welcome from '../Welcome'
import Bottom from '../Bottom'
import image from '../App/logo.png'
import contentText from '../../bottomTextCont.json'

export default class MainContent extends Component {

    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                <img height="265px" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <VideoEmbed/>
                <Welcome/>
                <Bottom text={contentText.FrontKitchen}/>
          </div>
        )
    }
}