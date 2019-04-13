import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Welcome from '../Welcome'
import Bottom from '../Bottom'
import image from '../App/logo.png'
import contentText from '../../bottomTextCont.json'

export default class MainContent extends Component {
    newTrain = ['Apr 19 - Math Challenge - Lunch Workshop', 'Apr 23 - Agile Product Owner Training', 'Apr 25 - Cloud Forum']
    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                <img height="265px" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <VideoEmbed/>
                <Welcome newHireCands={[]} clientPartners={[]} newTraining={this.newTrain} upcomingEng={[]}/>
                <Bottom text={contentText.BackKitchen}/>
          </div>
        )
    }
}