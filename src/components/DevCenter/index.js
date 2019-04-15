import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
import image from '../MainContent/logo.png'
import contentText from '../../data.json'
import '../../styles/DevCenter/index.css'

export default class MainContent extends Component {
    newTrain = ['Apr 19 - Math Challenge - Lunch Workshop', 'Apr 23 - Agile Product Owner Training', 'Apr 25 - Cloud Forum']
    page = "dev"
    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                <img className="logo" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <VideoEmbed page={this.page}/>
                <Column newHireCands={[]} clientPartners={[]} newTraining={this.newTrain} upcomingEng={[]}/>
                <Footer text={contentText.DevCenter}/>
          </div>
        )
    }
}