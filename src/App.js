import React, {Component} from 'react';
import './App.css';
import {history} from './History';
import { Router, Route, Switch } from "react-router-dom";

import Home from './routes/Home';
import Buy from './routes/Buy';
import Sell from './routes/Sell';
import Login from './routes/Login';
import Signup from './routes/Signup';
import BuyEach from './routes/BuyEach';
import { PrivateRoute } from './PrivateRoute';

class App extends Component{
  constructor(props){ //초기화 담당
    super(props);
  }

  componentDidMount() {
    // 프록시로 등록한 서버주소가 생략됨
    console.log("일단은")
 }

  render(){
    
    return(
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/signup" exact={true} component={Signup}/>
            <Route path="/login" exact={true} component={Login}/>
            <PrivateRoute path="/buyEach" exact={true} component={BuyEach}/>
            <PrivateRoute path="/sell" exact={true} component={Sell}/>
            <PrivateRoute path="/buy" exact={true} component={Buy}/>
            <PrivateRoute path="/" exact={true} component={Home}/>
          </Switch>
          
        </Router>

      </div>
    )
  }
}

export default App;
