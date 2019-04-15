import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
import image from '../MainContent/logo.png'
import contentText from '../../bottomTextCont.json'

export default class MainContent extends Component {
    upcomingEng = ['GPC - Dev Center team working to update the napa online website', 'Southwest - Dallas ETOPS project launching this month with help from MSP and ATL', 'Georgia Pacific - Daugherty has reopened project work with GP']
    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                    <img height="265px" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <Column upcomingEng={this.upcomingEng} newHireCands={[]} clientPartners={[]} newTraining={[]}/>
                <VideoEmbed/>
                <Footer text={contentText.Atlanta}/>
          </div>
        )
    }
}