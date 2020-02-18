import React, {Component} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom' 
import NavBar from './components/NavBar';
import Home from './routes/Home';
import Buy from './routes/Buy';
import Sell from './routes/Sell';
class App extends Component{
  constructor(props){ //초기화 담당
    super(props);
  }
  render(){
    
    return(
      <HashRouter>
        <NavBar></NavBar>
        <Route path="/sell" exact={true} component={Sell}/>
        <Route path="/buy" exact={true} component={Buy}/>
        <Route path="/" exact={true} component={Home}/>
      </HashRouter>
    )
  }
}

export default App;
