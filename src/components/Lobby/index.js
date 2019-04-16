import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
import image from '../../logo.png'
import '../../styles/Lobby/index.css'
import { pullData } from '../../services/pullData';

export default class Lobby extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: '',
            footer: '',
            column: ''
        }
    } 
    
    componentDidMount() {
        let getData = pullData(fetch)
        return getData({tvIdentifier: 'atl-lobby'}).then (result => {
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
                
                <VideoEmbed url={this.state.url} title={this.state.title}/>
                <Column column={this.state.column}/>
                <Footer text={this.state.footer}/>
          </div>
        )
    }
}