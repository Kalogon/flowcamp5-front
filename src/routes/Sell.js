import React from 'react'
import Aside from '../components/Aside'
import MyFinances from '../components/MyFinances'
import NavBar from '../components/NavBar';
import './Sell.css'
function Sell(){
    return(
        <div id="container-fluid">
            <NavBar></NavBar>
            <div className="col-xs-2">
                <Aside></Aside>
            </div>
            <div className="col-xs-10">
                <MyFinances></MyFinances>
            </div>
            
        </div>
    )
}

export default Sell;