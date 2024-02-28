// App.js
import './App.css'
// import React from 'react';
import AboutSection from "../src/Components/landing-page/about-section"
import SectionServiceItem from "../src/Components/landing-page/USP-section"
import HomePage from "./pages/homePage"
import React from "react";
import NewArrival from "./Components/landing-page/new-arrival";
// import Hero from "../src/Components/landing-page/hero-section"


function App() {
    return (
        <>
        <HomePage/>
        {/* <Hero/> */}
        <AboutSection />
       <NewArrival />
        </>
    )
}




export default App;