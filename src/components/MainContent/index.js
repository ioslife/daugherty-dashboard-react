import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Welcome from '../Welcome'
import Bottom from '../Bottom'
import image from '../App/logo.png'
import contentText from '../../bottomTextCont.json'

export default class MainContent extends Component {
    candArr = ['Ron Daugherty', 'Jan Daugherty']
    clientArr = ['The Home Depot', 'Cox Communications']
    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                <img height="265px" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <VideoEmbed/>
                <Welcome newHireCands={this.candArr} clientPartners={this.clientArr} newTraining={[]}/>
                <Bottom text={contentText.MainContent}/>
          </div>
        )
    }
}