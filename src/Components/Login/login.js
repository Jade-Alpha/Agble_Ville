import React from "react";



export default function Login_Page(){
    return(
     <>
     <h1 className="signup-text"> Login Page</h1>
    <div className="email">
    
     <input type="text" placeholder="Email Address"/>
    </div>

    <div className="password">
     <input type="text" placeholder="Type Password"/>
    </div>
    
    <div className="signup-button">
        <button type="submit" > Login </button>
    </div>
    <div className="AHA">
        <p >Don't have an account?
        <a href="https//:">SignUp</a>
        </p>
        
        
    </div>
     </>
    );
} 