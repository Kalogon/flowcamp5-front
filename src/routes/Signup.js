import React from 'react'
import './Signup.css'

function Signup(){
    return(
        <div id="signup">
            
            <p>
                Sign Up
            </p>
            <form action="/signup" method="post">
          id : <input type="text" name="username"/> &nbsp;
          password : <input type="text" name="password"/> &nbsp;
            <input type="submit"/>
            </form>
        </div>
    )
}

export default Signup;