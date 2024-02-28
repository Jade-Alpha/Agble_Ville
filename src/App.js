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
