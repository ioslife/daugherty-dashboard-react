import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
import image from './logo.png'
import contentText from '../../bottomTextCont.json'
import '../../styles/MainContent/index.css'

export default class MainContent extends Component {
    candArr = ['Ron Daugherty', 'Jan Daugherty']
    clientArr = ['The Home Depot', 'Cox Communications']
    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                    <img className="logo" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <VideoEmbed/>
                <Column newHireCands={this.candArr} clientPartners={this.clientArr} newTraining={[]} upcomingEng={[]}/>
                <Footer text={contentText.Corporate}/>
          </div>
        )
    }
}