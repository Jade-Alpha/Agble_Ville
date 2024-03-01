import React, { useState } from "react";
import Cart from "./Cart";
import styles from "./CartPage.module.css";

function CartPage({ items, onRemoveItem, onUpdateQuantity }) {
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    email: "",
    address: "",
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout information (send to backend, etc.)
    console.log("Checkout info:", checkoutInfo);
    // Add logic for further processing, e.g., sending data to backend
  };

  if (!items || !items.length) {
    return <div>No items in the cart</div>;
  }

  const totalCost = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartPage}>
      <h2>Shopping Cart</h2>
      <Cart items={items} onRemoveItem={onRemoveItem} onUpdateQuantity={onUpdateQuantity} />
      <div className={styles.summary}>
        <div>Total: &#8373;{totalCost.toFixed(2)}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={checkoutInfo.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={checkoutInfo.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={checkoutInfo.address}
            onChange={handleChange}
            required
          ></textarea>
          {/* Add more fields as needed */}
          <button type="submit" className={styles.checkoutButton}>
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartPage;
