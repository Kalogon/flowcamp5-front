import React,{Component} from 'react'
import { history } from '../History';
import './Signup.css'

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
            <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign up </h2>
                <label for="inputEmail" className="sr-only"> Email address
                </label>
                <input type="email" onChange={this._handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" onChange={this._handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this._signUp} type="button"> Sign up
                </button>
            </form>
        )
    }
}

export default Signup;