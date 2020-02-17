import React from 'react';
import './NavBar.css';

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
            <li>Html</li>
            <li>Css</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Ajax</li>
          </ul>
        </div>
      </div>
    )
  }
}