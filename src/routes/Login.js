import React,{Component} from 'react'
import './Login.css'
import { login } from '../authentication';
import { history } from '../History';
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
            <div>
                <NavBar></NavBar>
                <form className="form-signin">
                    <h2 className="form-signin-heading"> Please sign in </h2>
                    <label for="inputEmail" className="sr-only"> Email address
                    </label>
                    <input type="email" onChange={this._handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" className="sr-only"> Password</label>
                    <input type="password" onChange={this._handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                    <button className="btn btn-lg btn-primary btn-block" onClick={this._signIn} type="button"> Sign in
                    </button>
                </form>
            </div>
            
        )
    }
    
}

export default Login;