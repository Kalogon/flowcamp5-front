import React from 'react';
import {Link} from 'react-router-dom'
import {logout, getUser} from '../authentication'
import { history } from '../History';
import './Navbar.css'

class Navbar extends React.Component {
    _logout(){
        logout();
        history.push("/")
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/">Stock Investment Game</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li role="presentation"><Link to="/">home</Link></li>
                            <li role="presentation"><Link to="/buy">buy</Link></li>
                            <li role="presentation"><Link to="/sell">sell</Link></li>
                            
                        </ul>
                        <form class="navbar-form navbar-left" role="search">
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search"/>
                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                        <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{getUser()["username"]} <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="divider"></li>
                                <li role="presentation"><button className="btn btn-primary btn-block" onClick={this._logout} type="button">logout</button></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        )
    }
}

export default Navbar;
