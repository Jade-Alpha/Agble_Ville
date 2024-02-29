import React, { useState } from "react";
import Cart from "./Cart";

function ShoppingCart() {
  // State to hold the items in the shopping cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {/* Pass state and functions as props to Cart component */}
      <Cart items={cartItems} onRemoveItem={removeItemFromCart} />
      {/* Other components or UI elements */}
    </div>
  );
}

export default ShoppingCart;

