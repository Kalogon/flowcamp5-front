import React from 'react';
import './NavBar.css';
import LoginNav from '../components/LoginNav';
import NoLoginNav from '../components/NoLoginNav';

export default class App extends React.Component {

  state={}

  componentDidMount(){
      this._judgeAuth();
  }

  
  _isAuthenticated = ()=>{
      return fetch("http://kong.sparcs.org:37289/")
      .then(res=>{
          console.log(res);
          return res.json()
      })
  }

  _judgeAuth = async()=>{
      const auth = await this._isAuthenticated();
      if(auth.logincode === "OK"){
          this.setState({logincode:"OK"})
      }
  }


  render() {
    return (
      <div id="nav">
        <div id="title">
          <h1 id="fin">Finance</h1>
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
          {this.state.logincode ? <LoginNav></LoginNav> : <NoLoginNav></NoLoginNav>}
        </div>
      </div>
    )
  }
}