import React, {Component} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom' 
import NavBar from './components/NavBar';
import Home from './routes/Home';
import Buy from './routes/Buy';
import Sell from './routes/Sell';
import Login from './routes/Login';
import Signup from './routes/Signup';
class App extends Component{
  constructor(props){ //초기화 담당
    super(props);
  }
  render(){
    
    return(
      <HashRouter>
        <NavBar></NavBar>
        <Route path="/signup" exact={true} component={Signup}/>
        <Route path="/login" exact={true} component={Login}/>
        <Route path="/sell" exact={true} component={Sell}/>
        <Route path="/buy" exact={true} component={Buy}/>
        <Route path="/" exact={true} component={Home}/>
      </HashRouter>
    )
  }
}

export default App;
