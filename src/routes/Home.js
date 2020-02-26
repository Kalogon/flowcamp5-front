import React,{Component} from 'react'
import './Home.css'
import Section from '../components/Section'
import Aside from '../components/Aside'
import NavBar from '../components/NavBar';
class Home extends Component{

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


    render(){
        return (
            <div id="content">
                <NavBar></NavBar>
                {this.state.logincode ? <Section></Section> : "loading"}
                {this.state.logincode ? <Aside></Aside> : "loading"}
            </div>
        )
    }
}

export default Home;