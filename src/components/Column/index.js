import React, { Component } from 'react'
import '../../styles/Column/index.css'

export default class Column extends Component {

   createBody = () => {
       let arr = []
        if(this.props.newHireCands.length > 0){
            arr.push(<h3 key={0}><b>New Hire Candidates:</b></h3>)
            this.props.newHireCands.forEach( (e, index) => {
                arr.push(<li key={index +1}>{e}</li>)
            })   
        } 
        if ( this.props.clientPartners.length > 0){
            arr.push(<h3 key={-2}><b>Client Partners:</b></h3>)
            this.props.clientPartners.forEach( (e, index) => {
                arr.push(<li key={(index+20)*(index+20)}>{e}</li>)
            }) 
        }
        if ( this.props.newTraining.length > 0){
            arr.push(<h3 key={-3}><b>Don't miss out on upcoming training:</b></h3>)
            this.props.newTraining.forEach( (e, index) => {
                arr.push(<li key={(index+40)*(index+40)}>{e}</li>)
            }) 
        }
        if ( this.props.upcomingEng.length > 0){
            arr.push(<h3 key={-4}><b>Recent Wins:</b></h3>)
            this.props.upcomingEng.forEach( (e, index) => {
                arr.push(<li key={(index+30)*(index+30)}>{e}</li>)
            }) 
        }
      return arr
   }

    render() {
      return (
        <div className='welcomeCol'>
            <div className="welcomeText">
                Welcome to <b>Daugherty</b>!
            </div>
            
            {this.createBody()}
        </div>
      )
    }
}