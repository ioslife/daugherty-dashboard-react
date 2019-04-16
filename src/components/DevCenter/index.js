import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
import image from '../../logo.png'
import '../../styles/DevCenter/index.css'
import { pullData } from '../../services/pullData';

export default class DevCenter extends Component {
    newTrain = ['Apr 19 - Math Challenge - Lunch Workshop', 'Apr 23 - Agile Product Owner Training', 'Apr 25 - Cloud Forum']
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
        return getData({tvIdentifier: 'atl-dev'}).then (result => {
            result.json().then( response => {
                this.setState({
                    url: response.videoPlaylist,
                    footer: response.banner,
                    column: response.sidebar
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
                
                <VideoEmbed url={this.state.url}/>
                <Column newHireCands={[]} clientPartners={[]} newTraining={this.newTrain} upcomingEng={[]}/>
                <Footer text={this.state.footer}/>
          </div>
        )
    }
}