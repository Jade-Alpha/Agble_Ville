import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About-page/about";
import { Products } from "./pages/Product-page/product";
import Footer from "./Components/landing-page/footer-section";
import NavBar from "./Components/landing-page/navBarComponent/navBar";

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


const router = createBrowserRouter([
  {path: "/", element: <HomePage/>},
  {path: "/about", element: <About/>},
 {path: "/product", element: <Products/>},
 {path: "/contact", element: <Footer/>}
]);





export default function App() {
    return (
        <>
        {/* <NavBar/> */}
        {/* <HomePage/> */}
        <RouterProvider router={router}/>
       
            {/* <Hero /> */}
            {/* <AboutSection /> */}
            {/* <NewArrival /> */}
            {/* <BuyerCatalogue /> */}
            {/* <Cart /> */}
            {/* <CartPage /> */}
            {/* <CheckoutForm /> */}
            {/* <EditItemForm /> */}
            {/* <ItemList /> */}
            {/* <SignUpPage /> */}
            {/* <LoginPage /> */}
        </>
    );
}

 
