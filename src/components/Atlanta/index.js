import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
import image from '../MainContent/logo.png'
import contentText from '../../data.json'
import '../../styles/Atlanta/index.css'

export default class MainContent extends Component {
    upcomingEng = ['GPC - Dev Center team working to update the napa online website', 'Southwest - Dallas ETOPS project launching this month with help from MSP and ATL', 'Georgia Pacific - Daugherty has reopened project work with GP']
    page = "atl"
    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                    <img className="logo" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <Column upcomingEng={this.upcomingEng} newHireCands={[]} clientPartners={[]} newTraining={[]}/>
                <VideoEmbed page={this.page}/>
                <Footer text={contentText.Atlanta}/>
          </div>
        )
    }
}