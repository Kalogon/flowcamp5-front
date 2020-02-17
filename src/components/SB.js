import React, { Component } from 'react';
import './SB.css';

class SB extends Component{
    constructor(props){
        super(props);
    }

    render(){
      return(
        <div>
          <input type="checkbox" id="chxbox"/>
          <label for="chxbox"><em></em>체크해주세요</label>        
        </div>
        
        // <span className="sidebar" role="presentation" >
        //   <ul>
        //     <h1>My page</h1>
        //     <img src="#" alt="profile"></img>
        //     <li>Menu Item 1</li>
        //     <li>Menu Item 2</li>
        //     <li>Menu Item 3</li>
        //     <li>Menu Item 3</li>
        //     <li>Menu Item 3</li>
        //     <li>Menu Item 3</li>
        //     <li>Menu Item 3</li>
        //     <li>Menu Item 1</li>
        //     <li>Menu Item 2</li>
        //     <li>Menu Item 3</li>
        //     <li>Menu Item 3</li>
        //     <li>Menu Item 3</li>
        //     <li>Menu Item 3</li>
        //     <li>Menu Item 3</li>

        //   </ul>
        // </span>
      );
    }
  }
  export default SB;