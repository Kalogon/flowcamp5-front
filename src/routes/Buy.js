import React from 'react'
import Aside from '../components/Aside'
import Chart from '../components/Chart'
import NavBar from '../components/NavBar';
import './Buy.css'
function Buy(){
    return(
        <div id="content">
            <NavBar></NavBar>
            <Chart></Chart>
            <Aside></Aside>
        </div>
    )
}

export default Buy;