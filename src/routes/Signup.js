import React from 'react'
import './Signup.css'

function Signup(){
    return(
        <div>
            <form action="/signup" method="post">
          id : <input type="text" name="username"/>
          password : <input type="text" name="password"/>
            <input type="submit"/>
            </form>
        </div>
    )
}

export default Signup;