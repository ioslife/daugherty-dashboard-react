import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
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
                <Column newHireCands={this.candArr} clientPartners={this.clientArr} newTraining={[]} upcomingEng={[]}/>
                <Footer text={contentText.Corporate}/>
          </div>
        )
    }
}