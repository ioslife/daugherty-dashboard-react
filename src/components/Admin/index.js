import React, { Component } from 'react'
import { Text } from 'informed'
import TextareaAutosize from 'react-autosize-textarea'
import image from '../../logo.png'
import '../../styles/Admin/index.css'
import axios from 'axios'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

export default class Kitchen extends Component {
    upcomingEng = ''
    constructor(props) {
        super(props)

        this.state = {
            tvIdentifier: 'atl-lobby',
            url: '',
            footer: '',
            column: '',
            editorState: EditorState.createEmpty()
        }
    } 
    
    componentDidMount() {
        console.log(this.state)
    }

    handleChange(e) {
        if (e.target.id === 'url') {
            this.setState({url: e.target.value})
        }

        if (e.target.id === 'footer') {
            this.setState({footer: e.target.value})
        }

        if (e.target.id === 'dropdown') {
            this.setState({tvIdentifier: e.target.value})
        }
    }

    updateData = () => {
        axios.post('https://daugherty-dashboard-backend.herokuapp.com/api/v1/admin/updateConfig/', {tvIdentifier: (this.state.tvIdentifier), videoPlaylist: (this.state.url), banner: (this.state.footer), sidebar: (this.state.column)})
    }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
          column: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        })
      }

    render() {
        return (
            <div className="appDiv">
                <div className="dbsLogo">
                    <img className="logo" src={image} alt='Daugherty Business Solutions'></img>
                </div>
                
                <div className='form'>
                    <form onSubmit={this.updateData}>
                        <select id='dropdown' onChange={this.handleChange.bind(this)} value={this.state.tvIdentifier}>
                            <option value="atl-lobby">Lobby</option>
                            <option value="atl-kitchen">Kitchen</option>
                            <option value="atl-dev">Dev Center</option>
                        </select>
                        <br/>
                        <label>Video Playlist URL: </label>
                        <Text id='url' value={this.state.url} onChange={this.handleChange.bind(this)}></Text>
                        <br/>                    
                        <label>Column Data:</label>
                        <Editor
                            editorState={this.state.editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={this.onEditorStateChange}
                        />
                        <br/>
                        <label>Footer Data:</label>
                        <TextareaAutosize rows={5} id='footer' value={this.state.footer} onChange={this.handleChange.bind(this)}></TextareaAutosize>
                        <br/>
                        <input className='submitBtn' type="button" onClick={this.updateData} value="Update Dashboard"/>
                    </form>
                </div>
          </div>
        )
    }
}