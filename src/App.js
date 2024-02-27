import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BuyerCatalogue from "./Components/BuyerCatalogue/BuyerCatalogue";
import Cartpage from "./Components/CartBasket/Cartpage";
import CheckoutPage from "./Components/CheckoutBasket/CheckoutPage";


function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<BuyerCatalogue />} /> 
                <Route path="/products" element={<BuyerCatalogue />} />
                <Route path="/cart" element={<Cartpage />} /> 
                <Route path="/checkout" element={<CheckoutPage />} /> 
            </Routes>
        </Router>
    );
}

export default App;
