// import React from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { About } from "./pages/About-page/about";
// import { Products } from "./pages/Product-page/product";





// // const router = createBrowserRouter([
// //     { path: "/", element: <HomePage /> },
// //     // { path: "/about", element: <About /> },
// //     // { path: "/product", element: <Products /> },
// //     // { path: "/contact", element: <Footer /> }
// // ]);





// export default function App() {
//     console.log('brubrbfvrf')
//     return (
//         <>
//         <h1>dfndinfvgeid</h1>
//             <NavBar />
//             {/* <HomePage /> */}
//             {/* <RouterProvider router={router} /> */}

//             {/* <Hero /> */}
//             {/* <AboutSection /> */}
//             {/* <NewArrival /> */}
//             {/* <BuyerCatalogue /> */}
//             {/* <Cart /> */}
//             {/* <CartPage /> */}
//             {/* <CheckoutForm /> */}
//             {/* <EditItemForm /> */}
//             {/* <ItemList /> */}
//             {/* <SignUpPage /> */}
//             {/* <LoginPage /> */}
//         </>
//     );
// }




import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Components/landing-component/footer-section";
import NavBar from "./Components/landing-component/navBarComponent/navBar";
import { About } from "./pages/About-page/about";
import HomePage from "./pages/homePage";
import { Products } from "./pages/Product-page/product";
import SignUp_Page from "./pages/Signup_page/signup";
import Login_Page from "./pages/login_page/login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/product" element={<Products />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/contact" element={<Footer />}> </Route>
        <Route path="/sign-up" element={<SignUp_Page />}> </Route>
        <Route path="/log-in" element={< Login_Page />}> </Route>

      </Routes>
    </BrowserRouter>
  );
}
