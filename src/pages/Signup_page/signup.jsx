import React from "react";
import { Link } from "react-router-dom"
import NavBar from "../../Components/landing-component/navBarComponent/navBar";



export default function SignUp_Page(){
    return(
     <>
     <NavBar/>
    <div className="Container">
        <form className="form">

        
        <h1 className="signup-text">SignUp Page</h1><br></br>
    <div className="email">
    
    <input type="text" placeholder="Email Address"/>
   </div>

   <div className="password">
    <input type="text" placeholder="Create Password"/>
   </div>
   <div className="repassword"> 
   
    <input type="text" placeholder="Confirm Password"/>
   </div>

   <div className="signup-button">
       <button type="submit" > Sign UP </button>
   </div>
   <div className="AHA"><br></br>
       <p >Already have an Account?
       <Link to="/log-in">LOG IN</Link>
       </p>
       
       
   </div>
   </form>
        </div>
   
     </>
    );
} 