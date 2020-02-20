import React from 'react'
import './Login.css'

function Login(){
    return(
        <div>
            <form action="/login" method="post">
          id : <input type="text" name="username"/>
          password : <input type="text" name="password"/>
            <input type="submit"/>
            </form>
        </div>
    )
}

export default Login;