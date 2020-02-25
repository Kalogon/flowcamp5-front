import React from 'react'
import './Login.css'

function Login(){
    return(
        <div id="login">
            <p>
                Log In
            </p>
            <form action="/login" method="post">
                id : <input type="text" name="username"/> &nbsp;
                password : <input type="text" name="password"/> &nbsp;
            <input type="submit"/>
            </form>
        </div>
    )
}

export default Login;