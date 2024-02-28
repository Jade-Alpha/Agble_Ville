import React from "react";



export default function Login_Page(){
    return(
     <>
     <div className="container-log">
    <form className="form-log">
     <h1 className="signup-text-log"> Login Page</h1>
    <div className="email">
    
     <input type="text" placeholder="Email Address"/>
    </div>

    <div className="password">
     <input type="text" placeholder="Type Password"/>
    </div>
    
    <div className="signup-button">
        <button type="submit" > Login </button>
    </div>
    <div className="AHA-log">
        <p >Don't have an account?
        <a href="https//:">SignUp</a>
        </p>
        <div>
            <a href="">forgotten your password?</a>
        </div>
        
        
    </div>
    </form>
    </div>
     </>
    );
} 