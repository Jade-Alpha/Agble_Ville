import HomePage from "./pages/homePage"
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About-page/about";
import { Products } from "./pages/Product-page/product";
import Footer from "./Components/landing-page/footer-section";
import NavBar from "./Components/landing-page/navBarComponent/navBar";


const router = createBrowserRouter([
  {path: "/", element: <HomePage/>},
  {path: "/about", element: <About/>},
 {path: "/product", element: <Products/>},
 {path: "/contact", element: <Footer/>}
]);


export default App;

function App() {
    return (
        <>
        {/* <NavBar/> */}
        {/* <HomePage/> */}
        <RouterProvider router={router}/>
       
        </>
    )
}
