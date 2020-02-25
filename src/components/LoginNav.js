import React from 'react'
import {Link} from 'react-router-dom'
import './LoginNav.css'
function LoginNav(){

    return (
        <ul>
            <li><Link to="/" id="home">home</Link></li>
            <li><Link to="/buy">buy</Link></li>
            <li><Link to="/sell">sell</Link></li>
            <li><Link to="/">Ajax</Link></li>
          </ul>
    )
}

export default LoginNav;