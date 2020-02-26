import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../authentication'


class LoginNav extends Component{

    _logout(){
        logout();
    }

    render(){
        return (
            <div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/buy">buy</Link></li>
                    <li><Link to="/sell">sell</Link></li>
                </ul>
                <button className="btn btn-lg btn-primary btn-block" onClick={this._logout} type="button">logout
                </button>
            </div>
            
        )
    }
    
}

export default LoginNav;