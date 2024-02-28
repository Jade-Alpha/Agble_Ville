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
}
