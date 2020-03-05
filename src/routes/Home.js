import React,{Component} from 'react'
import './Home.css'
import Section from '../components/Section'
import Aside from '../components/Aside'
import NavBar from '../components/NavBar';
class Home extends Component{

    state={}


    render(){
        return (
            <div>
                <div classname="container-fluid">
                    <NavBar></NavBar>
                    <div className="col-xs-2">
                        <Aside></Aside>
                    </div>
                    <div className="col-xs-10">
                        <Section></Section>
                    </div>
                    
                </div>
            </div>
            
                
            
        )
    }
}

export default Home;