import React from 'react'
import { NavLink} from 'react-router-dom'
import './LoginNav.css'
function LoginNav(){

    return (
        <ul>
            <li><NavLink to="/" id="home" activeStyle={ {
      textDecoration: 'none',
      color: 'white'
    }}>home</NavLink></li>
            <li><NavLink to="/buy" activeStyle={ {
      textDecoration: 'none',
      color: 'white'
    }}>buy</NavLink></li>
            <li><NavLink to="/sell" activeStyle={ {
      textDecoration: 'none',
      color: 'white'
    }}>sell</NavLink></li>
            <li><NavLink to="/" activeStyle={ {
      textDecoration: 'none',
      color: 'white'
    }}>Ajax</NavLink></li>
          </ul>
    )
}

export default LoginNav;