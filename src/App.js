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
import HomePage from "./pages/homePage"
import React from "react";
import NewArrival from "./Components/landing-page/new-arrival";
import Hero from "../src/Components/landing-page/hero-section"
import AboutSection from "../src/Components/landing-page/about-section"
import BuyerCatalogue from "./Components/BuyerCatalogue/BuyerCatalogue"



export default App;

function App() {
    return (
        <>
        <HomePage/>
        
         <AboutSection />
       <NewArrival /> 
       <AboutHistory/>
       <BuyerCatalogue/>
       
     </>
    )
}
