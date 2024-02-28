<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import NewArrival from "./Components/landing-page/new-arrival";
import Hero from "../src/Components/landing-page/hero-section";
import BuyerCatalogue from "./Components/BuyerCatalogue/BuyerCatalogue";
import AddItemForm from "./Components/SellerManagement/AddItemForm";
import About from "./Components/landing-page/about-section/index";
import EditItemForm from "./Components/SellerManagement/EditItemForm";
import ItemList from "./Components/SellerManagement/ItemList";
import Cart from "./Components/CartBasket/Cart";
import CartItem from "./Components/CartBasket/CartItem";
import CartPage from "./Components/CartBasket/Cartpage";
import CheckoutForm from "./Components/CheckoutBasket/CheckoutForm";
import CheckoutPage from "./Components/CheckoutBasket/CheckoutForm"

export default App;

function App() {
    return (
        <>
        <Hero/>
        <About/>
       <NewArrival />
       <BuyerCatalogue/>
       <Cart/>
       <CartItem/>
       <CartPage/>
       <CheckoutForm/>
       <CheckoutPage/>
       <AddItemForm/>
       <EditItemForm/>
       <ItemList/>
        </>
    )
=======
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyerCatalogue from './Components/BuyerCatalogue/BuyerCatalogue';
import Cartpage from './Components/CartBasket/Cartpage';
import CheckoutPage from './Components/CheckoutBasket/CheckoutPage';
import HomePage from './pages/homePage';
import Hero from './Components/Hero/Hero';
import AboutSection from './Components/landing-page/about-section';
import NewArrival from './Components/landing-page/new-arrival';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<BuyerCatalogue />} />
          <Route path="/products" element={<BuyerCatalogue />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <HomePage />
        <Hero />
        <AboutSection />
        <NewArrival />
      </>
    </Router>
  );
>>>>>>> d3c654f7ab3e22a10d087f23599c4a932f7aeeed
}
=======
<<<<<<< HEAD
=======
>>>>>>> 48d4cb162560461d58c051f8fe9de24eb1163fd8
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
<<<<<<< HEAD
=======
=======
>>>>>>> 48d4cb162560461d58c051f8fe9de24eb1163fd8
import SignUp_Page from "./Components/Sign_up/signup";
import Footer from "./Components/landing-page/footer-section";
import Login_Page from "./Components/Login/login";

export default function App() {
    return(
<<<<<<< HEAD
>>>>>>> 5a4e158548b89df73e0de92f6ad3704aad1dd533
        <>
        { <SignUp_Page/> }
        <HomePage/>
<<<<<<< HEAD
=======
        <>
        { <SignUp_Page/> }
        <HomePage/>
>>>>>>> 48d4cb162560461d58c051f8fe9de24eb1163fd8
        
         <AboutSection />
       <NewArrival /> 
       <AboutHistory/>
       <BuyerCatalogue/>
       
     </>
    )
}
<<<<<<< HEAD
=======
=======
>>>>>>> 48d4cb162560461d58c051f8fe9de24eb1163fd8
        {/* { <Login_Page/> } */}
        </>
    )
}
import HomePage from "./pages/homePage"
import React from "react";



<<<<<<< HEAD
>>>>>>> 5a4e158548b89df73e0de92f6ad3704aad1dd533
=======
>>>>>>> 48d4cb162560461d58c051f8fe9de24eb1163fd8
>>>>>>> afdfb90f3a20f8262dd4deaa4fd092d6518430c5
