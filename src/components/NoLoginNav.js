import React from 'react'
import {Link} from 'react-router-dom'
function LoginNav(){
    return (
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/">Ajax</Link></li>
          </ul>
    )
}

export default LoginNav;