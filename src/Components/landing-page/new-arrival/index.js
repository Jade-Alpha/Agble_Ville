<<<<<<< HEAD
import React, { useState } from "react";
=======
<<<<<<< HEAD
=======
import React from "react";
>>>>>>> afdfb90f3a20f8262dd4deaa4fd092d6518430c5
import styles from "./index.module.css";

const allProducts = [
  { name: "Carrots", category: "vegetables", price: 20 },
  { name: "Potatoes", category: "vegetables", price: 60 },
  { name: "Tomatoes", category: "vegetables", price: 50 },
  { name: "Milk", category: "dairy", price: 20 },
  { name: "Apples", category: "fruits", price: 40 },
  { name: "Cheese", category: "dairy", price: 90 },
  { name: "Mushrooms", category: "vegetables", price: 40 },
  { name: "Snails", category: "others", price: 50 },
];

function NewArrival() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (productName) => {
    // Implement your logic to add the product to the cart
    console.log(`Added ${productName} to cart`);
  };

  return (
    <section className={styles.products}>
      <div className={styles.navigation}>
        <button onClick={() => handleCategoryChange("all")}>All</button>
        <button onClick={() => handleCategoryChange("fruits")}>Fruits</button>
        <button onClick={() => handleCategoryChange("vegetables")}>Vegetables</button>
        <button onClick={() => handleCategoryChange("dairy")}>Dairy</button>
        <button onClick={() => handleCategoryChange("others")}>Others</button>
      </div>

      <h2>Latest Arrivals</h2>
      <h1>NEW PRODUCTS</h1>

      <div className={styles.productItems}>
        {allProducts
          .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
          .map((product, index) => (
            <div className={styles.productCard} key={index}>
              <img src={`assets/assets/images/${product.name.toLowerCase()}.avif`} alt={product.name} />
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productPrice}>
                <span>&#8373;</span>
                {product.price}
              </div>
              <div className={styles.cartIcon} onClick={() => addToCart(product.name)}>
                <img src="assets/cart.png" alt="Add to Cart" />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default NewArrival;
>>>>>>> 48d4cb162560461d58c051f8fe9de24eb1163fd8
