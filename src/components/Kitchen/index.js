import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
import image from '../../logo.png'
import '../../styles/Kitchen/index.css'
import { pullData } from '../../services/pullData';

export default class Kitchen extends Component {
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
        return getData({tvIdentifier: 'atl-kitchen'}).then (result => {
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
                
                <Column column={this.state.column}/>
                <VideoEmbed url={this.state.url} title={this.state.title}/>
                <Footer text={this.state.footer}/>
          </div>
        )
    }
}