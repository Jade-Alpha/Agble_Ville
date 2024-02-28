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
        <Hero/>
         <AboutSection />
       <NewArrival />
       <BuyerCatalogue/>
        </>
    )
}
