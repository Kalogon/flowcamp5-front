import React from 'react'
import Aside from '../components/Aside'
import MyFinances from '../components/MyFinances'
import NavBar from '../components/NavBar';
import './Sell.css'
function Sell(){
    return(
        <div id="content">
            <NavBar></NavBar>
            <MyFinances></MyFinances>
            <Aside></Aside>
        </div>
    )
}

export default Sell;