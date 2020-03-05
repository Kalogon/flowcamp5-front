import React,{Component} from 'react'
import './Login.css'
import { login } from '../authentication';
import { history } from '../History';
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar';
class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:''
        };
    }

    state={}
    
    _handleEmailChange= (e)=>{
        this.setState({email:e.target.value})
    }
    _handlePasswordChange= (e)=>{
        this.setState({password:e.target.value})
    }

    _requestSignIn = ()=>{
        console.log(this.state);
        console.log(this.state.email);
        return fetch("http://kong.sparcs.org:37289/api/auth/login",{
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            credentials: 'same-origin',
            // SameSite: 'None',
            // Secure: 'true',
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
        .then(data => {
            console.log("App.js login .then " , data);
            if(data.token === undefined){	// 로그인 실패 빈 json형식이 넘어온 경우
              alert('login fail!');
            }
            else{
                login(data)
                console.log("login-success")
                history.push("/")
            }
              
          })
        .catch(err=>{
            console.log(err)
        })
    }

    _signIn= async()=>{
        const signal = await this._requestSignIn(); 
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
                                    <button className="btn btn-lg btn-primary btn-block" onClick={this._signIn} type="button"> Sign in</button>
                                </form>
                                <div class="text-center">
                                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div class="text-center">
                                    <Link to="/signup">Create an Account!</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
            
        )
    }
    
}

export default Login;