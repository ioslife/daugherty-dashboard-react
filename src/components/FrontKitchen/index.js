import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Welcome from '../Welcome'
import Bottom from '../Bottom'
import image from '../App/logo.png'
import contentText from '../../bottomTextCont.json'

export default class MainContent extends Component {
    upcomingEng = ['GPC - Dev Center team working to update the napa online website', 'Southwest - Dallas ETOPS project launching this month with help from MSP and ATL', 'Georgia Pacific - Daugherty has reopened project work with GP']
    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                <img height="265px" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                <Welcome upcomingEng={this.upcomingEng} newHireCands={[]} clientPartners={[]} newTraining={[]}/>
                <VideoEmbed/>
                <Bottom text={contentText.FrontKitchen}/>
          </div>
        )
    }
}