import React, {Component} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom' 
import NavBar from './components/NavBar';
import Home from './routes/Home';
import About from './routes/About';

class App extends Component{
  constructor(props){ //초기화 담당
    super(props);
  }
  render(){
    
    return(
      <HashRouter>
        <NavBar></NavBar>
        <Route path="/about" exact={true} component={About}/>
        <Route path="/" exact={true} component={Home}/>
      </HashRouter>
    )
  }
}

export default App;
