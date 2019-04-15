import React, {Component} from 'react'
import VideoEmbed from '../VideoEmbed'
import Column from '../Column'
import Footer from '../Footer'
import image from '../../logo.png'
import '../../styles/Kitchen/index.css'
import { pullData } from '../../services/pullData'
import { pushData } from '../../services/pushData';

export default class Kitchen extends Component {
    upcomingEng = ''
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
        console.log(this.state)
        let getData = pullData(fetch)
        return getData({tvIdentifier: 'atl-kitchen'}).then (result => {
            result.json().then( response => {
                this.setState({
                    url: response.videoPlaylist
                })
            })
        })
    }

    updateData = () => {
        console.log(this.state)
        let updateData = pushData(fetch)
        return updateData({url: (this.state.url), footer: (this.state.footer), column: (this.state.column)})
    }

    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                    <img className="logo" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <form onSubmit={this.updateData}>
                    <label value={this.state.url}>Video Playlist URL: </label>
                    <input></input>
                    <inputfield></inputfield>
                    <br></br>
                    <input  value="Update Dashboard" onClick={this.updateData} />
                </form>
          </div>
        )
    }
}