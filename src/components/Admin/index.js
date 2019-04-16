import React, { Component } from 'react'
import { Text } from 'informed'
import TextareaAutosize from 'react-autosize-textarea'
import image from '../../logo.png'
import { pullData } from '../../services/pullData'
import { pushData } from '../../services/pushData'
import '../../styles/Admin/index.css'

export default class Kitchen extends Component {
    upcomingEng = ''
    constructor(props) {
        super(props)

        this.state = {
            url: '',
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

    handleChange(e) {
        if (e.target.id === 'url') {
            this.setState({url: e.target.value})
        }

        if (e.target.id === 'column') {
            this.setState({column: e.target.value})
        }

        if (e.target.id === 'footer') {
            this.setState({footer: e.target.value})
        }

        console.log(this.state)
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
                
                <div className='form'>
                    <form onSubmit={this.updateData}>
                        <label>Video Playlist URL: </label>
                        <Text id='url' value={this.state.url} onChange={this.handleChange.bind(this)}></Text>
                        <br/>                    
                        <label>Column Data:</label>
                        <TextareaAutosize rows={5} id='column' value={this.state.column} onChange={this.handleChange.bind(this)}></TextareaAutosize>
                        <br/>
                        <label>Footer Data:</label>
                        <TextareaAutosize rows={5} id='footer' value={this.state.footer} onChange={this.handleChange.bind(this)}></TextareaAutosize>
                        <br/>
                        <input className='submitBtn' type="Submit" value="Update Dashboard"/>
                    </form>
                </div>
          </div>
        )
    }
}