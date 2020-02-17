import React, { Component } from 'react';
import logo from './hmhmh.png'
import './Section.css'

class Section extends Component{
    render(){
        return(
            <div id="section">
                <img src={logo} alt={'logo'}></img>
            </div>
        )
    }
}

export default Section;