import React, { useState } from "react";
import styles from "./products.module.css";
import image from "../../../assets/cart.png"

const allProducts = [
  { id: 1, name: "Carrots", category: "vegetables", price: 20 },
  { id: 2, name: "Potatoes", category: "vegetables", price: 60 },
  { id: 3, name: "Tomatoes", category: "vegetables", price: 50 },
  { id: 4, name: "Milk", category: "dairy", price: 20 },
  { id: 5, name: "Apples", category: "fruits", price: 40 },
  { id: 6, name: "Cheese", category: "dairy", price: 90 },
  { id: 7, name: "Mushrooms", category: "vegetables", price: 40 },
  { id: 8, name: "Snails", category: "others", price: 50 },
  { id: 9, name: "Carrots", category: "vegetables", price: 20 },
  { id: 10, name: "Potatoes", category: "vegetables", price: 60 },
  { id: 11, name: "Tomatoes", category: "vegetables", price: 50 },
  { id: 12, name: "Milk", category: "dairy", price: 20 },
  { id: 13, name: "Apples", category: "fruits", price: 40 },
  { id: 14, name: "Cheese", category: "dairy", price: 90 },
  { id: 15, name: "Mushrooms", category: "vegetables", price: 40 },
  { id: 16, name: "Snails", category: "others", price: 50 },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <section className={styles.products}>
      <h2>Latest Arrivals</h2>
      <h1>NEW PRODUCTS</h1>

      <nav className={styles.navigation}>
        <button onClick={() => handleCategoryChange("all")}>All</button>
        <button onClick={() => handleCategoryChange("fruits")}>Fruits</button>
        <button onClick={() => handleCategoryChange("vegetables")}>Vegetables</button>
        <button onClick={() => handleCategoryChange("dairy")}>Dairy</button>
      </nav>

      <div className={styles.productItems}>
        {allProducts
          .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
          .map((product) => (
            <div className={styles.productCard} key={product.id}>
              <img src={`assets/assets/images/${product.name.toLowerCase()}.avif`} alt={product.name} />
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productPrice}>
                <span>&#8373;</span>
                {product.price}
              </div>
              <div className={styles.cartIcon} onClick={() => addToCart(product)}>
                <img src={image}/>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Products;