import React from "react";



export default function SignUp_Page(){
    return(
     <>
    <div className="Container">
        <form className="form">

        
        <h1 className="signup-text">SignUp Page</h1>
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
   <div className="AHA">
       <p >Already have an Account?
       <a href="https//:">Login</a>
       </p>
       
       
   </div>
   </form>
        </div>
   
     </>
    );
} 