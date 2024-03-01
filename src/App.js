import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About-page/about";
import { Products } from "./pages/Product-page/product";
import Footer from "./Components/landing-component/footer-section/";
import HomePage from "./pages/homePage";
import SignUp_Page from "./pages/Signup_page/signup";



const router = createBrowserRouter([
  {path: "/", element: <HomePage/>},
  {path: "/about", element: <About/>},
 {path: "/product", element: <Products/>},
 {path: "/contact", element: <Footer/>},
 {path: "/sign_up", element: <SignUp_Page/>}
]);





export default function App() {
    return (
        <>
        {/* <NavBar/> */}
          {/* <HomePage/>  */}
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

