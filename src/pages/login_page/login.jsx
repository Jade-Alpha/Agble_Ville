import React from "react";
import NavBar from "../../Components/landing-component/navBarComponent/navBar";



export default function Login_Page(){
    return(
     <>
     <NavBar/>
     <div className="container-log">
    <form className="form-log">
     <h1 className="signup-text-log"> Login Page</h1><br></br>
    <div className="email">
    
     <input type="text" placeholder="Email Address"/>
    </div>

    <div className="password">
     <input type="text" placeholder="Type Password"/>
    </div>
    
    <div className="signup-button">
        <button type="submit" > Login </button>
    </div>
    <div className="AHA-log"><br></br>
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