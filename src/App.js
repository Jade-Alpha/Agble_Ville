// App.js
import './App.css'
// import React from 'react';
import AboutSection from "../src/Components/landing-component/about-section"
import SectionServiceItem from "../src/Components/landing-component/USP-section"
import HomePage from "./pages/homePage"
import React from "react";
import NewArrival from "../src/Components/landing-component/new-arrival";
import AboutHistory from './Components/aboutHistoryComponent/aboutHistory';

// import Hero from "../src/Components/landing-page/hero-section"

import BuyerCatalogue from "./Components/BuyerCatalogue/BuyerCatalogue"
import SignUp_Page from "./Components/Sign_up/signup";
import Footer from "./Components/landing-component/footer-section";
import Login_Page from "./Components/Login/login";






export default function App() {
    return(
        <>
        { <SignUp_Page/> }
        <HomePage/>
        
         <AboutSection />
       <NewArrival /> 
       <AboutHistory/>
       <BuyerCatalogue/>
       <Footer/>
       
     </>
    )
}
        {/* { <Login_Page/> } */}
        




