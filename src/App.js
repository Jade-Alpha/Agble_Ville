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


function App() {
    return (
        <>
        <HomePage/>
        
         <AboutSection />
       <NewArrival /> 
       <AboutHistory/>
       
       </>
    )
}




export default App;