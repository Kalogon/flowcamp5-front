import React from 'react'
import Aside from '../components/Aside'
import Chart from '../components/Chart'
import NavBar from '../components/NavBar';
import './Buy.css'
function Buy(){
    return(
        <div id="container-fluid">
            <NavBar></NavBar>
            <div className="col-xs-2">
                <Aside></Aside>
            </div>
            <div className="col-xs-10">
                <Chart></Chart>
            </div>
            
            
        </div>
    )
}

export default Buy;