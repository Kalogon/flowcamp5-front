import React,{Component} from 'react'
import { history } from '../History';
import './Signup.css'
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar';
class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:''
        };
    }

    state={}
    
    _handleEmailChange = (e)=>{
        this.setState({email:e.target.value})
    }
    _handlePasswordChange = (e)=>{
        this.setState({password:e.target.value})
    }

    _requestSignUp = ()=>{
        console.log(this.state);
        console.log(this.state.email);
        return fetch("http://kong.sparcs.org:37289/api/auth/register",{
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            credentials: 'same-origin',
            // mode:'no-cors',
            method: "POST",
            body: JSON.stringify({
                username:this.state.email,
                password:this.state.password
            })
        })
        .then(res=> {
            return res.json()
        })
        .then(json=> {
            if(json.message === 'registered successfully'){
                history.push("/login")
                return json.message
            }
            else{
                return json.message
            }
            
        })
        .catch(err=>{
            console.log(err)
        })
    }

    _signUp= async ()=>{
        const signal = await this._requestSignUp(); 
        console.log(signal);

    }

    

    render(){
        return(
            // <div>
            //     <form action="/login" method="post">
            //   id : <input type="text" name="username"/>
            //   password : <input type="text" name="password"/>
            //     <input type="submit"/>
            //     </form>
            // </div>
            
            <div className="container">

                <div class="row justify-content-center">
                    <div class="col-xs-12 col-lg-12 col-md-12">
            
                        <br></br>
                        <br></br>
                        <br></br>
                        <div class="row">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group">
                                        <input type="email" onChange={this._handleEmailChange} class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" onChange={this._handlePasswordChange} class="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                            <label class="custom-control-label" for="customCheck">Remember Me</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block" onClick={this._signUp} type="button"> Sign Up</button>
                                </form>
                                
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
            
        )
    }
}

export default Signup;