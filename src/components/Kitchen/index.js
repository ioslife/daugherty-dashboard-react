import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
import image from '../../logo.png'
import '../../styles/Kitchen/index.css'
import { pullData } from '../../services/pullData';

export default class Kitchen extends Component {
    upcomingEng = ['GPC - Dev Center team working to update the napa online website', 'Southwest - Dallas ETOPS project launching this month with help from MSP and ATL', 'Georgia Pacific - Daugherty has reopened project work with GP']
    constructor(props) {
        super(props)

        this.state = {
            url: '',
            title: '',
            footer: '',
            column: ''
        }
    } 
    
    componentDidMount() {
        let getData = pullData(fetch)
        return getData({tvIdentifier: 'atl-kitchen'}).then (result => {
            result.json().then( response => {
                this.setState({
                    url: response.videoPlaylist
                })
            })
        })
    }

    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                    <img className="logo" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <Column upcomingEng={this.upcomingEng} newHireCands={[]} clientPartners={[]} newTraining={[]}/>
                <VideoEmbed url={this.state.url} title={this.state.title}/>
                <Footer text={this.state.footer}/>
          </div>
        )
    }
}