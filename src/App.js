import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyerCatalogue from './Components/BuyerCatalogue/BuyerCatalogue';
import Cartpage from './Components/CartBasket/Cartpage';
import CheckoutPage from './Components/CheckoutBasket/CheckoutPage';
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
        <NewArrival />
      </>
    </Router>
  );
}

export default App;
