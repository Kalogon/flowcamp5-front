import React,{Component} from 'react'
import './Home.css'
import Section from '../components/Section'
import Aside from '../components/Aside'

class Home extends Component{
    render(){
        return (
            <div id="content">
                <Section></Section>
                <Aside></Aside>
            </div>
        )
    }
}

export default Home;