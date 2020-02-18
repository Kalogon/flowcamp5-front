import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom'

export default class App extends React.Component {

  render() {
    return (
      <div id="nav">
        <div id="title">
          <h1>Finance</h1>
          <h2>html practice</h2>
        </div>

        {/* <div id="gnb">
          <ul>
            <li>Web</li>
            <li>Mobile</li>
            <li>Game</li>
            <li>AI</li>
          </ul>
        </div> */}

        <div id="lnb">
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/buy">buy</Link></li>
            <li><Link to="/sell">sell</Link></li>
            <li><Link to="/">React</Link></li>
            <li><Link to="/">Javascript</Link></li>
            <li><Link to="/">Ajax</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}