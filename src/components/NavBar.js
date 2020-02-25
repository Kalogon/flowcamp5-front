import React from 'react';
import './NavBar.css';
import LoginNav from '../components/LoginNav';
import NoLoginNav from '../components/NoLoginNav';
import { getToken } from '../authentication';

export default class App extends React.Component {

  state={}

  componentDidMount(){
      this._judgeAuth();
  }

  
  _isAuthenticated = ()=>{
      return fetch("http://kong.sparcs.org:37289/api/auth/check",{
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-access-token": getToken()
        },
        credentials: 'same-origin'
      })
      .then(res=>{
          console.log(res);
          return res.json()
      })
      .then(data => {
          if(data.success===true){
            this.setState({logincode:"OK"})
          }
      });
  }

  _judgeAuth = async()=>{
      const auth = await this._isAuthenticated();
      console.log("현재 state"+this.state);
  }


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
          {this.state.logincode ? <LoginNav></LoginNav> : <NoLoginNav></NoLoginNav>}
        </div>
      </div>
    )
  }
}