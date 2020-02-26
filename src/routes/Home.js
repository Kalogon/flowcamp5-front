import React,{Component} from 'react'
import './Home.css'
import Section from '../components/Section'
import Aside from '../components/Aside'
import NavBar from '../components/NavBar';
class Home extends Component{

    state={}


    render(){
        return (
            <div id="content">
                <NavBar></NavBar>
                <Section></Section>
                <Aside></Aside>
            </div>
        )
    }
}

export default Home;