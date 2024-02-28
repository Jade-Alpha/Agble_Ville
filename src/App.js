import React from "react";
import Hero from "../src/Components/landing-page/hero-section";
import AboutSection from "../src/Components/landing-component/about-section";
import NewArrival from "../src/Components/landing-page/new-arrival";
import BuyerCatalogue from "./Components/BuyerCatalogue/BuyerCatalogue";
import Cart from "./Components/CartBasket/Cart";
import CartPage from "./Components/CartBasket/Cartpage";
import CheckoutForm from "./Components/CheckoutBasket/CheckoutForm";
import EditItemForm from "./Components/SellerManagement/EditItemForm";
import ItemList from "./Components/SellerManagement/ItemList";
import SignUpPage from "./Components/Sign_up/signup";
import LoginPage from "./pages/login_page/login";

function App() {
    return (
        <>
            <Hero />
            <AboutSection />
            <NewArrival />
            <BuyerCatalogue />
            <Cart />
            <CartPage />
            <CheckoutForm />
            <EditItemForm />
            <ItemList />
            <SignUpPage />
            <LoginPage />
        </>
    );
}

export default App;
